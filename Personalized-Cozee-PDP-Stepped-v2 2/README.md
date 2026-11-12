# Personalized Cozee PDP – Stepped v2 (responsive prototype)

Exported from the "Customizable Chair Design" canvas on 2026-11-12.

- `Personalized-Cozee-PDP-Stepped-v2.dc.html` – the responsive prototype (desktop and mobile in one file).
- `Personalized-Cozee-PDP-Stepped-v2-Mobile.dc.html` – 390px wrapper that loads the prototype at phone width.
- `index.html` – redirects to the prototype.
- `assets/` – every image and font the prototype uses.
- `ds/deltachildrendesignsystem_6fc118/` – Delta Children design system (stylesheets, `ds-bundle.js` components, Luxenta font).
- `support.js` – the Design runtime the `.dc.html` files need.
- `.nojekyll` – tells GitHub Pages to serve every file as-is. Keep it at the root of the published site.

Serve the folder over HTTP (GitHub Pages, or `npx serve .` locally). Opening the files with `file://` won't load the components.
