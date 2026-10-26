# nicicaza.com

Plain static site: HTML + one stylesheet + a few lines of JS. No build step, no dependencies.

```
site/
  index.html              home (video hero)
  about/index.html
  work/index.html
  privacy-policy/index.html
  404.html
  styles.css              all styling; colors/fonts are tokens at the top
  site.js                 mobile menu + reduced-motion video handling
  img/                    WebP images
  media/                  videos (stored via Git LFS)
netlify.toml              publish dir, redirects, cache headers
```

## Edit

Change the HTML directly. The header and footer are repeated in each page, so nav or footer edits need to be made in all five files.

## Preview

```
cd site && python3 -m http.server 8000
```

Then open http://localhost:8000. The videos are Git LFS files; run `brew install git-lfs && git lfs install && git lfs pull` to get them locally.

## Deploy

Netlify deploys `site/` on push to `main`.
