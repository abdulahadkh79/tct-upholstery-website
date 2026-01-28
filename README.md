TCT Upholstery — Upload Instructions

1) Upload this zip to Hostinger File Manager:
   - Login to Hostinger → Websites or Hosting → File Manager
   - Open the domain folder (your domain) and then open `public_html`.
   - Upload `tct-upholstery-website.zip` using Upload button or drag-and-drop.
   - Right-click the uploaded zip and choose "Extract" inside `public_html`.
   - Ensure `index.html`, `styles.css`, and `script.js` are directly inside `public_html`.

2) Notes:
   - Images used are hotlinked to external URLs. If you want a fully offline copy, ask me and I'll download assets into an `assets/` folder and recreate the zip.
   - The site uses Font Awesome from CDN — internet required for icons.

3) If you can’t see `public_html` in File Manager:
   - Make sure you selected the correct hosting account/domain tile in the Hostinger dashboard.
   - If you are on the "Upload your app files" screen (app deployment), choose File Manager from Hosting panel instead.

4) Need help?
   - If you want, I can create the zip with local image files included. Reply "include images" and I will fetch and bundle them.

Good luck — upload this zip into `public_html` and the site will be live.

Notes about Hostinger Git import:

- Hostinger's Git deploy detects specific app types (Vite, Next.js, Express, etc.). To allow direct Git import and deployment from this repository, I added a minimal Node/Express server and `package.json`. This makes the repo recognizable as a Node app so Hostinger's Git deploy can build/start it.

- After import, Hostinger should run `npm install` and start the app using `npm start`. No build step is required — the Express server serves the static files directly.

- If you prefer to keep the site purely static on Hostinger, you can also upload `tct-upholstery-website.zip` to `public_html` via File Manager (no server required).
