# AVT Natural website

Static prototype of the AVT Natural website, built from the revised sitemap and IA. No build step and no dependencies.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

| File | What it holds |
|---|---|
| `index.html` | Page shell: header and mega menus, mobile menu, footer, search overlay, sample drawer, and the home page template |
| `base.css` | Design tokens and the home page styles |
| `site.css` | Inner pages: heroes, story sections, catalogue, product template, forms, overlays |
| `data.js` | Content: product catalogue, families and collections, case studies, search index |
| `app.js` | Hash router, page templates and interactions |
| `img/` | Images taken from the AVT Drive documents, plus product cut-outs |

Pages are hash routes, for example `#products.pigments`, `#p.primyra-y60` or `#agro`.

## Open items

- Leadership names, investor reports feed and career roles are placeholders.
- Confirm RizoPro, FenuBoost and TexPro before launch.
- Forms validate but do not send anything yet.
