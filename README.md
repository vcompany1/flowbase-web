# FlowBase web

Public website for [FlowBase](https://flowbase-erp.vercel.app/), an ERP and MRP for small manufacturers. Static site built with [Astro](https://astro.build), in English, German and Spanish.

## Edit the texts

All visible text lives in `src/i18n/content.js`, one block per language. The layout and styles are in `src/components/Page.astro`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deploy

Imported into Vercel as its own project: every push to `main` deploys automatically.
