// src/app/notes/page.tsx

import Link from "next/link";
import styles from "./page.module.css";
const posts = [
  {
    slug: "dsa-notes-prefix-suffix-product",
    title: "Data Structures & Algorithms Notes: Basic Prefix and Suffix in DSA",
    date: "2025-12-01",
  },
  {
    slug: "dsa-notes-2d-dp",
    title: "Data Structures & Algorithms Notes: 2D DP",
    date: "2025-11-20",
  },
];

export default function notes() {
  return (
    <div className={styles.notesContainer}>
      <h1 className={styles.header}>Learning Notes</h1>
      <ul className={styles.blogsList}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/notes/${post.slug}`}>{post.title}</Link>
            <span> — {post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
