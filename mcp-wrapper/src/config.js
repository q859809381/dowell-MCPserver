const fs = require('node:fs');
const path = require('node:path');

function loadEnvFile(filename = path.join(__dirname, '..', '.env')) {
  if (!fs.existsSync(filename)) return;
  for (const line of fs.readFileSync(filename, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf('=');
    if (separator < 1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^(["'])(.*)\1$/, '$2');
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile();

module.exports = { loadEnvFile };
