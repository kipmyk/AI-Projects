# RSS App Clone

A clean, MVP web application to generate RSS feeds from websites that don't satisfy them. Built with Next.js 15, Tailwind CSS, and Cheerio.

![RSS App Screenshot](public/screenshot.png)

## Features

- **Link Extraction**: Scrapes websites to find articles using `cheerio`.
- **RSS Generation**: Converts scraped data into standard RSS XML format.
- **Instant Preview**: View found articles before generating the feed.
- **Clean UI**: Simple, responsive interface built with Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Scraping**: Cheerio
- **RSS Generation**: `rss` package
- **ID Generation**: `nanoid`

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open the app**:
    Navigate to [http://localhost:3000](http://localhost:3000).

4.  **Generate a feed**:
    - Enter a URL (e.g., `https://techcrunch.com`).
    - Click "Generate RSS".
    - Use the generated link in your favorite RSS reader.

## API Endpoints

-   `POST /api/generate`: Accepts `{ url: string }`, returns `{ feedUrl: string, preview: array }`.
-   `GET /api/feed/[id]`: Returns the generated RSS XML.

## License

MIT
