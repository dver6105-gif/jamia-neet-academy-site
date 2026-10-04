import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { MobileNav } from "@/components/mobile-nav";
import { site } from "@/lib/site-data";

const nav = [
  { label: "About", href: "#about" },
  { label: "Campus & Hostel", href: "#campus" },
  { label: "Faculty", href: "#faculty" },
  { label: "Batches", href: "#batches" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-gold/30 bg-navy text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-10 w-10 overflow-hidden rounded-full bg-white/5">
            <Image src="/logo.png" alt="" width={512} height={512} className="h-full w-full scale-[1.08] object-cover" />
          </span>
          <span className="hidden text-sm font-semibold leading-tight sm:block">
            Jamia Umer Bin Khattab
            <br />
            <span className="text-xs font-normal text-gold">NEET Academy, Kunjkheda</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-white/90 hover:text-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneRaw}`}
            className="hidden items-center gap-2 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-navy-dark md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
