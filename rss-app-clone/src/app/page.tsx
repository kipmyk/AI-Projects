"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [feedUrl, setFeedUrl] = useState("");
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setFeedUrl("");
    setItems([]);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate feed");
      }

      setFeedUrl(data.feedUrl);
      setItems(data.preview);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-10 space-y-8">
      <h1 className="text-3xl font-bold">RSS Feed Generator</h1>

      <form onSubmit={handleGenerate} className="flex gap-4">
        <input
          type="url"
          required
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 hover:bg-blue-700 transition-colors"
        >
          {loading ? "Generating..." : "Generate RSS"}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {feedUrl && (
        <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded border border-green-200 dark:border-green-800 text-green-800 dark:text-green-400">
          <p className="font-medium">Feed Generated!</p>
          <a
            href={feedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline break-all block mt-2"
          >
            {typeof window !== "undefined" ? window.location.origin : ""}{feedUrl}
          </a>
        </div>
      )}

      {items.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Preview ({items.length} items)</h2>
          <ul className="space-y-4">
            {items.map((item, i) => (
              <li key={i} className="p-4 border rounded border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline text-blue-600 block mb-1"
                >
                  {item.title}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
