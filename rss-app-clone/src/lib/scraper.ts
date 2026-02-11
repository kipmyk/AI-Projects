import * as cheerio from "cheerio";

export async function scrapeWebsite(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch website");
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    const items: any[] = [];

    $("a").each((_, el) => {
        const title = $(el).text().trim();
        const link = $(el).attr("href");

        if (title.length > 30 && link?.startsWith("http")) {
            items.push({
                title,
                link,
                description: title
            });
        }
    });

    return items.slice(0, 20);
}
