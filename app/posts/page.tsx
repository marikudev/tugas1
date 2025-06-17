"use client";

import React, { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Post[] = await response.json();

      setPosts(data.slice(0, 5));
    } catch (err) {
      setError("Gagal mengambil data: " + (err as Error).message);
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        5 Judul Postingan Terbaru
      </h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={fetchPosts}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? "Memuat..." : "Reload Data"}
        </button>
      </div>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {loading && !error ? (
        <p className="text-center">Memuat postingan...</p>
      ) : (
        <ul className="list-disc pl-5">
          {posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.id} className="mb-2 text-lg">
                {post.title}
              </li>
            ))
          ) : (
            <p className="text-center">Tidak ada postingan yang ditemukan.</p>
          )}
        </ul>
      )}
    </div>
  );
}
