import Image from "next/image";
import {
  CheckCircle2,
  Clock,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users
} from "lucide-react";

import { batches, faculty, site, whyUs } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 md:grid-cols-[1fr_300px] md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">{site.shortName}</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{site.name}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{site.tagline}</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
              NEET preparation for Class 11, Class 12, and repeater students, with separate classes and hostel facilities for boys and girls.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy-dark hover:bg-gold-light"
              >
                Enquire for Admission
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center gap-2 rounded-md border border-gold/60 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
          <div className="mx-auto h-52 w-52 overflow-hidden rounded-full bg-white/5 sm:h-64 sm:w-64 md:h-[300px] md:w-[300px]">
            <Image
              src="/logo.png"
              alt={`${site.name} emblem`}
              width={512}
              height={512}
              priority
              className="h-full w-full scale-[1.08] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          Why Jamia Umer Bin Khattab NEET Academy
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {whyUs.map((item) => (
            <p key={item} className="flex items-start gap-3 rounded-lg border border-gold/30 bg-white p-4 text-sm leading-6">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* Campus & Hostel */}
      <section id="campus" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold tracking-tight text-navy sm:text-3xl">Campus & Hostel</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-600">
            Separate learning and hostel facilities for boys and girls at Jamia Kunjkheda Campus.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-gold/30 bg-white">
              <div className="flex aspect-[2.2/1] items-center justify-center bg-navy text-gold">
                <ShieldCheck className="h-12 w-12" aria-hidden="true" />
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <ShieldCheck className="h-5 w-5 text-gold-dark" />
                  Boys&apos; Hostel & Classes
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Separate classrooms and hostel facility for boys at Jamia Kunjkheda Campus.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gold/30 bg-white">
              <div className="flex aspect-[2.2/1] items-center justify-center bg-navy text-gold">
                <ShieldCheck className="h-12 w-12" aria-hidden="true" />
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <ShieldCheck className="h-5 w-5 text-gold-dark" />
                  Girls&apos; Hostel & Classes
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Separate classrooms and hostel facility for girls at Jamia Kunjkheda Campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-navy sm:text-3xl">Our Faculty</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {faculty.map((member) => (
            <div key={member.name} className="rounded-xl border border-gold/30 bg-white p-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy/10 text-navy">
                <GraduationCap className="h-9 w-9" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{member.name}</h3>
              <p className="text-sm font-semibold text-gold-dark">{member.subject}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Batches & Test Series */}
      <section id="batches" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Batches & Admissions
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {batches.map((batch) => (
              <div key={batch.name} className="rounded-xl border border-gold/30 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy/10 text-navy">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{batch.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{batch.description}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 rounded-xl border border-gold/30 bg-white p-6 sm:flex-row sm:items-center sm:justify-around">
            <p className="flex items-center gap-2 text-sm font-medium text-navy">
              <Clock className="h-5 w-5 text-gold-dark" />
              {site.timings}
            </p>
            <p className="flex items-center gap-2 text-sm font-medium text-navy">
              <CheckCircle2 className="h-5 w-5 text-gold-dark" />
              Weekly Test: {site.weeklyTest}
            </p>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">For fee details, please contact us directly.</p>
        </div>
      </section>

      {/* Test Series & Parent Updates */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          Weekly Tests & Parent Updates
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-slate-600">
          Every Monday, students take a structured test covering Physics, Chemistry, and Biology. Progress updates
          are shared with parents so they stay informed about their child&apos;s preparation.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Admission Enquiry</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Call or message us on WhatsApp for admission details and a campus visit.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy-dark hover:bg-gold-light"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Assalamu Alaikum, I'd like to know more about admissions at Jamia Umer Bin Khattab NEET Academy.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <p className="flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-gold" />
              {site.addressLine}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
