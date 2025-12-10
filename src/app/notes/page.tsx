// src/app/notes/page.tsx
'use client'
import Link from "next/link";

const posts = [
  { slug: "nextjs-routing", title: "Understanding Next.js Routing", date: "2025-12-01" },
  { slug: "dsa-notes", title: "Data Structures & Algorithms Notes", date: "2025-11-20" },
];

export default function notes() {
  return (
    <main>
      <h1>Learning Notes</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/notes/${post.slug}`}>
              {post.title}
            </Link>
            <span> — {post.date}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}