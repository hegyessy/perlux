import Link from "next/link";

export default function navigation() {
  return (
    <header className="py-4 mx-4 flex justify-between items-center border-t border-b">
      <nav>
        <Link href="/reviews"><a className="mr-2">Reviews</a></Link>
        <Link href="/gear"><a className="mr-2">Film</a></Link>
        <Link href="/about"><a className="mr-2">Cameras</a></Link>
        <Link href="/about"><a className="mr-2">Longform</a></Link>
      </nav>
      <hgroup>
        <h1 className="text-3xl font-bold mr-4 text-center uppercase">Perlux</h1>
        <p className="capitalize">A photography journal by Jason Hegyessy</p>
      </hgroup>
      <nav>
        <Link href="/about"><a className="mr-2">About</a></Link>
        <Link href="/about"><a className="mr-2">Shop</a></Link>
      </nav>
    </header>
  );
}
