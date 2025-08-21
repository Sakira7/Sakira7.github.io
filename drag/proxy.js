const express = require(`express`);
const https = require(`node:https`);

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/health", (_, res)=> res.status(200).send("ok"));

app.get("/api", async (req, res) => {
    try{
        const raw = req.query.url;

        if (!raw) {
            return res.status(400).json({ error: "Missing 'url' parameter" });
        }
        const target = /%[0-9A-Fa-f]{2}/.test(raw) ? decodeURIComponent(raw) : raw;

        const agent = target.startsWith("https:")
            ? new https.Agent({rejectUnauthorized : false})
            : undefined;
        
            const r = await fetch(target, {
                agent,
                chache: "no-store",
                header: { "User-Agent": "render-proxy/1.0", "Accept": "*/*" }
            });

            const type = r.headers.get("content-type") || "text/plain";
            const body = await r.text();

            res.status(r.status).type(type).send(body);
        }catch(e){
            res.status(502).json({ error: "proxy-failed", message: e.message });
        }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});