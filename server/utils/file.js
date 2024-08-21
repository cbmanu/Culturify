import { parse, join } from "path";
import { createWriteStream } from "fs";
import fs from "fs";

export async function readFile(file) {
  const { createReadStream, filename, mimetype, encoding } = await file;
  const stream = createReadStream();
  let { ext, name } = parse(filename);
  name = `single${Math.floor(Math.random() * 1000) + 1}`;
  let url = join(__dirname, `../Upload/${name}-${Date.now()}${ext}`);
  const imageStream = createWriteStream(url);
  await stream.pipe(imageStream);
  const baseUrl = "htpp://localhost";
  const port = "3001";
  url = `${baseUrl}${port}${url.split("Upload")[1]}`;
  return url;
}
