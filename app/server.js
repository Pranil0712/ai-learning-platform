const express = require("express");
const path = require("path");
const { client, httpRequestCounter } = require("./metrics");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  httpRequestCounter.inc();
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});