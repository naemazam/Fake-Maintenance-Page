# Fake Maintenance Page

If your site is down and it’s your fault, just replace it with this fake Cloudflare error page.  
Everyone will blame Cloudflare while you quietly fix it. Thank me later. 😄

This repository contains the code for a **fake Cloudflare‑style 500 Internal Server Error page** that you can deploy when your site goes down unexpectedly.

This project is just a fun way for developers to handle downtime with a little humor. We absolutely **love Cloudflare** and appreciate the incredible effort they put into making the internet safer and faster for all of us. This project is in no way intended to undermine their work or deceive users, just a playful take on error pages. 😊 

**Cloudflare LOVE YOU!!!**

## 🚀 Live Demo

![DEMO](https://pbs.twimg.com/media/G-r2v_qbcAABI7P?format=jpg&name=medium) 
You can see the deployed version here:  
➡️ [Live](https://v0.app/templates/fake-maintenance-page-IY8FIsBMshf?ref=1HWO0Y)

## 📌 What This Does

When your real site is down, this page:

- Shows a **Cloudflare‑like 500 Error** message;
- Mimics Cloudflare’s route map and messaging;
- Suggests maintenance and auto‑refresh options;
- Gives visitors a familiar error interface while you fix the problem behind the scenes.

It’s meant to be a **fun and helpful developer tool** — not to deceive users maliciously.

## 🧠 How It Works

1. Deploy this project on a static host (like Vercel, Netlify, GitHub Pages).
2. Replace your site’s root page with this maintenance page when needed.
3. Once your real backend is fixed, revert to your usual site.

The page is built using HTML, CSS, and JavaScript; it visually resembles a Cloudflare error screen.

## 🔧 Installation

Clone your fork:

```bash
git clone https://github.com/naemazam/Fake-Maintenance-Page.git
```

Install dependencies and run locally (if applicable):

```bash
cd Fake-Maintenance-Page
npm install
npm run dev
```

Or deploy directly on Vercel: 
```bash
npx vercel
```

Configure as needed. 

🛠️ Customizing the Page

## You can edit:

Text messages (e.g., “The web server is currently undergoing maintenance”)

Icons and layout

Refresh countdown or retry behavior

You can update the visuals in /public and the layout under /app or the corresponding JSX/HTML templates.

 ## 🤝 Contributing

Contributions are very welcome! If you want to:

- Improve the UI/UX
- Add support for other error codes (e.g., 502, 503)
- Make it more customizable via config

…please open an issue or submit a pull request.

### How to Contribute

1. Fork this repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add awesome feature"`).
4. Push the branch (`git push origin feature-name`).
5. Open a pull request and describe your changes.

## 📜 License

This project is licensed under the **MIT License**.

