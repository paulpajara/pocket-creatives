const http = require("http");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

function argValue(name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}

const root = path.join(__dirname, "..", "public");
const host = argValue("--host", process.env.HOST || "127.0.0.1");
const port = Number(argValue("--port", process.env.PORT || 8000));

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2"
};

function resolveFile(url) {
  const pathname = decodeURIComponent(new URL(url, `http://${host}`).pathname);
  const requested = path.normalize(path.join(root, pathname));

  if (!requested.startsWith(root)) {
    return null;
  }

  if (pathname.endsWith("/")) {
    return path.join(requested, "index.html");
  }

  return fs.existsSync(requested) && !fs.statSync(requested).isDirectory()
    ? requested
    : path.join(root, "index.html");
}

const server = http.createServer((request, response) => {
  const file = resolveFile(request.url);

  if (!file || !fs.existsSync(file)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": types[path.extname(file)] || "application/octet-stream"
  });
  fs.createReadStream(file).pipe(response);
});

server.listen(port, host, () => {
  console.log(`Preview available at http://${host}:${port}/`);
});
