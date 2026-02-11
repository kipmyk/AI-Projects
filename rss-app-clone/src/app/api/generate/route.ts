import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { scrapeWebsite } from "@/lib/scraper";
import { saveFeed } from "@/lib/feedStore";

export async function POST(req: Request) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json({ error: "URL required" }, { status: 400 });
        }

        const items = await scrapeWebsite(url);
        const id = nanoid();

        saveFeed({
            id,
            url,
            items
        });

        return NextResponse.json({
            feedUrl: `/api/feed/${id}`,
            preview: items
        });

    } catch (error) {
        return NextResponse.json({ error: "Failed to generate feed" }, { status: 500 });
    }
}
