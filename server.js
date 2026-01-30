const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const servers = dns.getServers();
console.log("Node.js is using these DNS servers:", servers);

const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
