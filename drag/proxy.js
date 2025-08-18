const express = require(`express`);
const cors = require(`cors`);

const app = express();
const PORT = process.env.PORT || 3000;


app.disable("etag");
app.set("x-powered-by", false);
app.use(cors());
app.options("*", cors());

app.get("/health", (_, res)=> res.status(200).send("ok"));

app.get("/debug", async (_req,res) => {
    try{
        const r = await fetch("https://example.com", {cache: "no-store"});
        res.status(r.status).type(r.headers.get("content-type")||"text-plain");
        res.send(await r.text());
    }catch(e){
        console.error("DEBUG fetch failed", e);
        res.status(500).json({error:"debug failed", code: e.code, name: e.name, message: e.message});
    }
});

app.get("/api", async (req, res) => {
    const raw = req.query.url;

    if (!raw) {
        return res.status(400).json({ error: "Missing 'url' parameter" });
    }
    const targetUrl = decodeURIComponent(raw);


    //NEVER cache this proxy response
    res.set({
        "Cache-Control" : "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
        "Pragma" : "no-cache",
        "Expires" : "0",
        "Surrogate-Control" : "no-store"
    });

    try {
        //handle cold-start & slow upstreams
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(),25000);

        const upstream = await fetch(targetUrl, {
            signal: controller.signal,
            cache: "no-store",
            headers: {"User-Agent": "render-proxy/1.0"}
        });
        clearTimeout(timer);

        //pass through upstream status and content type
        const contentType = upstream.headers.get("content-type") || "application/octet-stream";
        const buf = Buffer.from(await upstream.arrayBuffer());
        res.status(upstream.status).type(contentType).send(buf);

        //simplest: buffer and send (fine for small JSON/HTML)
        const body = await upstream.text();
        res.send(body);

    } catch (error) {
        console.error("Proxy error: ",{name:error.name, code: error.code, message: error.message});
        if(error.name === "AbortError"){
            return res.status(504).json({error:"Upstream timeout"});
        }
        console.log("Proxy error: ", error);
        res.status(502).json({ error: "Failed to fetch external resource" , code:error.code});
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});