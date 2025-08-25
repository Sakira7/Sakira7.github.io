const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); // allow all origins by default


// Example: GET /api?url=https://some-website.com/data
app.get("/api", async (req, res) => {
    try {
        const response = await fetch(targetUrl);
        const contentType = response.headers.get("content-type");
        res.set("Content-Type", contentType);
        const data = await response.text(); // works for JSON, HTML, etc.
        res.send(data);

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch external resource" });
    }
    return res.status(400).json({ error: "Missing 'url' parameter" });
});



app.listen(PORT, () => {
    console.log(`Proxy server running at https://proxy-9x3u.onrender.com`);
});