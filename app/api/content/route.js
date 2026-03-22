import { NextResponse } from "next/server";

const REPO = "durdan/dandotiya-heritage";
const BRANCH = "main";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const VALID_LANGS = ["hi", "en"];

async function ghAPI(path, options = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  return res;
}

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

    const filePath = `content/portal/${lang}.json`;
    const res = await ghAPI(`/repos/${REPO}/contents/${filePath}?ref=${BRANCH}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: `Content file not found for language: ${lang}` },
        { status: 404 }
      );
    }

    const ghData = await res.json();
    const content = JSON.parse(
      Buffer.from(ghData.content, "base64").toString("utf-8")
    );

    return NextResponse.json({ content, sha: ghData.sha });
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
    if (!GITHUB_TOKEN) {
      return NextResponse.json(
        { error: "GITHUB_TOKEN not configured on server." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { lang, content, sha } = body;

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

    const filePath = `content/portal/${lang}.json`;
    const langLabel = lang === "hi" ? "Hindi" : "English";

    // Get current SHA if not provided
    let currentSha = sha;
    if (!currentSha) {
      const getRes = await ghAPI(`/repos/${REPO}/contents/${filePath}?ref=${BRANCH}`);
      if (getRes.ok) {
        const getData = await getRes.json();
        currentSha = getData.sha;
      }
    }

    // Commit the updated content to GitHub
    const encoded = Buffer.from(
      JSON.stringify(content, null, 2) + "\n",
      "utf-8"
    ).toString("base64");

    const commitRes = await ghAPI(`/repos/${REPO}/contents/${filePath}`, {
      method: "PUT",
      body: JSON.stringify({
        message: `Update ${langLabel} portal content via admin`,
        content: encoded,
        sha: currentSha,
        branch: BRANCH,
      }),
    });

    if (!commitRes.ok) {
      const errData = await commitRes.json();
      console.error("GitHub commit error:", errData);
      return NextResponse.json(
        { error: `GitHub commit failed: ${errData.message}` },
        { status: commitRes.status }
      );
    }

    const commitData = await commitRes.json();

    return NextResponse.json({
      success: true,
      lang,
      commitUrl: commitData.commit?.html_url,
      message: `Saved & committed! Vercel will auto-redeploy.`,
    });
  } catch (err) {
    console.error("POST /api/content error:", err);
    return NextResponse.json(
      { error: "Failed to save content." },
      { status: 500 }
    );
  }
}
