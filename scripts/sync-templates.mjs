import { writeFile } from "node:fs/promises";

const source = {
  id: "betheme",
  name: "BeTheme",
  listUrl: "https://muffingroup.com/betheme/prebuilt-websites/",
  imageUrl: (slug) => `https://muffingroup.com/betheme/websites/${slug}.webp`,
  previewUrl: (slug) => `https://themes.muffingroup.com/be/${slug}/`,
};

const featureCodes = { sho: "shop", blo: "blog", por: "portfolio", one: "onePage" };
const outputPath = new URL("../src/data/templates.json", import.meta.url);

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, value = "true"] = arg.replace(/^--/, "").split("=");
    return [key, value];
  }),
);
const limit = args.limit ? Number(args.limit) : Number.POSITIVE_INFINITY;

const decode = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();

const response = await fetch(source.listUrl, {
  headers: { "User-Agent": "Mozilla/5.0 (compatible; AstraTemplateSync/1.0)" },
});
if (!response.ok) throw new Error(`List request failed with ${response.status}`);
const html = await response.text();

const cardPattern =
  /<div class="website-card ([^"]*)" data-title="([^"]*)"[^>]*data-popular="(\d+)"[^>]*>.*?href="\/betheme\/website\/([^/"]+)\/".*?alt="([^"]*)".*?<p class="website-categories">(.*?)<\/p>/gs;
const categoryPattern = /href="\/betheme\/prebuilt-websites\/([^/"]+)\/">([^<]+)</g;

const itemsBySlug = new Map();
const categoriesBySlug = new Map();

for (const [, classNames, keywords, popular, slug, title, categoryHtml] of html.matchAll(cardPattern)) {
  if (itemsBySlug.has(slug)) continue;
  const classes = classNames.split(/\s+/);
  const categories = [...categoryHtml.matchAll(categoryPattern)].map(([, categorySlug, name]) => {
    categoriesBySlug.set(categorySlug, decode(name));
    return categorySlug;
  });
  itemsBySlug.set(slug, {
    id: `${source.id}-${slug}`,
    slug,
    title: decode(title),
    categories,
    features: Object.entries(featureCodes)
      .filter(([code]) => classes.includes(code))
      .map(([, feature]) => feature),
    keywords: decode(keywords),
    popularity: Number(popular),
    image: source.imageUrl(slug),
    previewUrl: source.previewUrl(slug),
  });
}

if (itemsBySlug.size === 0) throw new Error("No templates found; the page structure may have changed.");

const items = [...itemsBySlug.values()].sort((a, b) => b.popularity - a.popularity).slice(0, limit);
const usedCategories = new Set(items.flatMap((item) => item.categories));
const categories = [...categoriesBySlug]
  .filter(([slug]) => usedCategories.has(slug))
  .map(([slug, name]) => ({ slug, name }))
  .sort((a, b) => a.name.localeCompare(b.name));

await writeFile(
  outputPath,
  `${JSON.stringify({ source: { id: source.id, name: source.name }, total: itemsBySlug.size, categories, items }, null, 2)}\n`,
);

console.log(`Saved ${items.length} of ${itemsBySlug.size} templates in ${categories.length} categories.`);
