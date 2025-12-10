// src/app/notes/[slug]/page.tsx
export default function NotePage({ params }: { params: { slug: string } }) {
  return <h1>Mock note: {params.slug}</h1>;
}