import https from "https";
import fs from "fs";
import express from "express";

const app = express();

// Serve a simple route
app.get("/", (req, res) => {
  res.send("Secure Server Running 🚀");
});

// Read SSL certificate files
const options = {
  key: fs.readFileSync("C:certs\fullchain.pem"),
  cert: fs.readFileSync("C:certsprivkey.pem"),
};

// Start HTTPS server
https.createServer(options, app).listen(443, () => {
  console.log("HTTPS Server running on port 443");
});
