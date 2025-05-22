import https from "https";
import crypto from "crypto";

import fs from "fs";
const start = Date.now();

function doRequest() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("HTTP: ", Date.now() - start);
      });
    })
    .end();
}

function dohash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash: ", Date.now() - start);
  });
}

doRequest();

fs.readFile("mutitask.js", "utf8", () => {
  console.log("FS: ", Date.now() - start);
});

dohash();
dohash();
dohash();
dohash();
dohash();
dohash();
dohash();