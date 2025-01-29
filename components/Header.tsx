"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuPage from "./MenuPage";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  const pathname = usePathname();
  const links: { href: string; label: string }[] = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 shadow-sm p-6">
      <div className="container flex items-center justify-between">
        <Link
          href="#hero"
          className={`font-bold text-2xl md:text-3xl ${lobster.className}`}
        >
          Vamsi<span className="text-orange-500">.</span>
        </Link>

        <nav className="hidden lg:block space-x-10">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="lg:hidden">
          <MenuPage />
        </div>
      </div>
    </header>
  );
}
export default Header;
