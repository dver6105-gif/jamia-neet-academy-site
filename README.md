# Jamia Umer Bin Khattab NEET Academy — Website

Marketing site for Jamia Umer Bin Khattab NEET Academy, a residential NEET coaching institute in Kunjkheda, Kannad, Maharashtra, offering separate classes and hostel facilities for boys and girls within a Deeni Mahaul.

Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/              Pages, layout, metadata, sitemap, robots.txt
components/       Header, footer, nav, WhatsApp button, sticky CTA
lib/site-data.ts  All editable site content — contact info, faculty, batches, timings
public/           Logo, favicon, and other static assets
```

## Editing Content

Most of the text on the site (phone number, faculty names, batch details, timings) lives in **`lib/site-data.ts`**. Update values there rather than editing the page components directly.

Still marked as placeholders and pending real content:
- Hostel details (room setup, mess, daily routine) for both boys' and girls' sections
- Faculty bios
- Campus and hostel photos
- Fee structure (currently "contact us")

## Deployment

The site deploys automatically to Vercel on every push to `main`. To deploy manually or connect a new environment, import this repository in the [Vercel dashboard](https://vercel.com/new).

A custom domain can be added later under the project's **Settings → Domains** in Vercel once one is purchased.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react (icons)
