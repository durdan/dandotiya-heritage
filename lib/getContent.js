import fs from "fs";
import path from "path";

export function getPortalContent(lang = "hi") {
  const filePath = path.join(process.cwd(), "content", "portal", `${lang}.json`);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}
