const fs = require("fs");

const file = process.argv[2];
if (!file) {
  console.log("Usage: node run.js <file.micro>");
  process.exit(1);
}

const lines = fs.readFileSync(file, "utf8").split("\n");

for (let i = 0; i < lines.length; i++) {
  console.log("MicroLang >", lines[i]);
}

