export default function sitemap() {
  const base = "https://www.dandotiya.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/en`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/morena`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
