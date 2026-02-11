import { NextResponse } from "next/server";
import RSS from "rss";
import { getFeed } from "@/lib/feedStore";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const feedData = getFeed(id);

    if (!feedData) {
        return new NextResponse("Feed not found", { status: 404 });
    }

    const feed = new RSS({
        title: "Generated RSS Feed",
        description: `Feed for ${feedData.url}`,
        feed_url: req.url,
        site_url: feedData.url
    });

    feedData.items.forEach(item => {
        feed.item({
            title: item.title,
            url: item.link,
            description: item.description,
            date: new Date(),
        });
    });

    return new NextResponse(feed.xml(), {
        headers: {
            "Content-Type": "application/xml"
        }
    });
}
