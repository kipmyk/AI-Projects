interface FeedItem {
    title: string;
    link: string;
    description: string;
}

interface Feed {
    id: string;
    url: string;
    items: FeedItem[];
}

const feeds = new Map<string, Feed>();

export function saveFeed(feed: Feed) {
    feeds.set(feed.id, feed);
}

export function getFeed(id: string) {
    return feeds.get(id);
}
