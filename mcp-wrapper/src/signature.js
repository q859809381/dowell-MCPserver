const crypto = require('node:crypto');

function stableValue(value) {
  if (value === null || value === undefined) return '';
  if (Array.isArray(value)) return `[${value.map(stableValue).join(',')}]`;
  if (typeof value === 'object') {
    return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stableValue(value[key])}`).join(',')}}`;
  }
  return String(value);
}

function stringifySortedValues(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return '';
  return Object.keys(body).sort().map(key => stableValue(body[key])).join('');
}

function formatTimestamp(date = new Date(), timeZone = process.env.API_TIMEZONE || 'Asia/Shanghai') {
  const formatter = new Intl.DateTimeFormat('zh-CN', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  });
  const parts = Object.fromEntries(formatter.formatToParts(date).map(part => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
}

function createSign({ appId, secret, timestamp, body }) {
  const source = `${appId}${timestamp}${secret}${stringifySortedValues(body)}`;
  return crypto.createHash('md5').update(source, 'utf8').digest('hex').toLowerCase();
}

function createHeaders({ appId, secret, body, now = new Date(), timeZone }) {
  const timestamp = formatTimestamp(now, timeZone);
  return {
    APPID: appId,
    TIMESTAMP: timestamp,
    SIGN: createSign({ appId, secret, timestamp, body })
  };
}

module.exports = {
  stringifySortedValues,
  formatTimestamp,
  createSign,
  createHeaders
};
