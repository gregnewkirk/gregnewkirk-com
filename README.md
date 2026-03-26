# gregnewkirk.com

Personal hub site for Dr. Gregory M. Newkirk, PhD.

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no config needed
4. Set custom domain: `gregnewkirk.com`

Or deploy via CLI:

```bash
npx vercel
npx vercel --prod
```

## Customization

- Replace `/public/headshot-placeholder.svg` with `/public/headshot.jpg` (update the `src` in `page.tsx`)
- Update publication links with actual DOI URLs
- Swap contact email when drgregshow.com workspace is ready
