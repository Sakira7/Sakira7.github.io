const express = require(`express`);
const cors = require(`cors`);
const http = require(`node:http`);
const https = require(`node:https`);
const { URL } = require(`node:url`);

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

    let u;
    try{
        u=new URL(targetUrl);
    }catch{
        return res.status(400).json({error: "invalid URL"});
    }

    //NEVER cache this proxy response
    res.set({
        "Cache-Control" : "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
        "Pragma" : "no-cache",
        "Expires" : "0",
        "Surrogate-Control" : "no-store"
    });

    const isHttps = u.protocol === "https:";
    const client = isHttps ? https : http;

    const reqOpts = {
        protocol: u.protocol,
        hostname: u.hostname,
        port: u.port || (isHttps ? 443 : 80),
        path: u.pathname + (u.search || ""),
        method: "GET",
        headers: {
            "User-Agent": "render-proxy/1.0",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
        },
        rejectUnauthorized: !isHttps ? undefined : false,
        timeout: 25000,
    };
        const upstream = client.request(reqOpts, (up) => {
        const type = up.headers["content-type"] || "application/octet-stream";
        res.status(up.statusCode || 502).type(type);
        up.pipe(res);
    });

    upstream.on("timeout", ()=>{
        upstream.destroy(new Error("Upstream timeout"));
    });

    upstream.on("error", (err)=>{
        console.error("Proxy upstream error: ", err.code || err.message);
        if(!res.headerSent){
            res.status(502).json({ error: "Failed to fetch external resource"});
        }
    });
    upstream.end();

});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});