import Link from "next/link";
import Navigation from "./navigation";
import Footer from "./footer";

function DefaultLayout({children}) {
  return (
    <main className="h-screen flex flex-col justify-between">
      <div className="mx-auto sm:w-full lg:max-w-screen-xl">
        <Navigation />
        {children}
      </div>
      <Footer />
    </main>
  );
}

export { DefaultLayout };
