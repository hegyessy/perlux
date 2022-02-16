import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Perlux</h1>
      <p>An analog photography blog</p>
      <Link href="/">
        <a> Home </a>
      </Link>
      <Link href="/about">
        <a> About </a>
      </Link>
      <h2>Home</h2>
    </div>
  );
}
