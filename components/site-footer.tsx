import Image from "next/image";

import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/30 bg-navy-dark py-10 text-white/80">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white/5">
              <Image src="/logo.png" alt="" width={512} height={512} className="h-full w-full scale-[1.08] object-cover" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{site.name}</p>
              <p className="text-xs text-white/60">{site.addressLine}</p>
            </div>
          </div>
          <div className="text-sm">
            <p>{site.phone}</p>
            <p className="text-white/60">{site.timings}</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
