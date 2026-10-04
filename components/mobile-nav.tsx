"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Campus & Hostel", href: "#campus" },
  { label: "Faculty", href: "#faculty" },
  { label: "Batches", href: "#batches" },
  { label: "Contact", href: "#contact" }
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-gold/60 text-gold"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-gold/30 bg-navy shadow-lg">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-white hover:bg-navy-light"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
