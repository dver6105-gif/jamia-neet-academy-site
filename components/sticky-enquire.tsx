import { ArrowRight } from "lucide-react";

export function StickyEnquire() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-navy/95 p-3 backdrop-blur md:hidden">
      <a
        href="#contact"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-semibold text-navy-dark"
      >
        Enquire for Admission
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
