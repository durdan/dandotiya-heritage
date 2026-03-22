import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content", "portal");
const VALID_LANGS = ["hi", "en"];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang");

    if (!lang || !VALID_LANGS.includes(lang)) {
      return NextResponse.json(
        { error: "Invalid or missing lang parameter. Use 'hi' or 'en'." },
        { status: 400 }
      );
    }

    const filePath = path.join(CONTENT_DIR, `${lang}.json`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: `Content file not found for language: ${lang}` },
        { status: 404 }
      );
    }

    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);

    return NextResponse.json(data);
  } catch (err) {
    console.error("GET /api/content error:", err);
    return NextResponse.json(
      { error: "Failed to read content file." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { lang, content } = body;

    if (!lang || !VALID_LANGS.includes(lang)) {
      return NextResponse.json(
        { error: "Invalid or missing lang parameter. Use 'hi' or 'en'." },
        { status: 400 }
      );
    }

    if (!content || typeof content !== "object") {
      return NextResponse.json(
        { error: "Invalid or missing content payload." },
        { status: 400 }
      );
    }

    const filePath = path.join(CONTENT_DIR, `${lang}.json`);

    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), "utf-8");

    return NextResponse.json({ success: true, lang });
  } catch (err) {
    console.error("POST /api/content error:", err);
    return NextResponse.json(
      { error: "Failed to write content file." },
      { status: 500 }
    );
  }
}
