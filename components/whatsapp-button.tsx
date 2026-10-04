import { MessageCircle } from "lucide-react";

import { site } from "@/lib/site-data";

export function WhatsappButton() {
  const message = encodeURIComponent(
    "Assalamu Alaikum, I'd like to know more about admissions at Jamia Umer Bin Khattab NEET Academy."
  );

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] md:bottom-5"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
