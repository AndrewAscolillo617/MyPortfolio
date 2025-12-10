// src/app/notes/[slug]/page.tsx

export default async function NotePage({ params }: any) {
  return <h1>Mock note: {params.slug}</h1>;
}
