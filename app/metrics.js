const client = require("prom-client");

client.collectDefaultMetrics();

const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP requests"
});

module.exports = { client, httpRequestCounter };