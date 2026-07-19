# Shubham Das — Fine Art Portfolio

Built with **React 18** + **Tailwind CSS**. Dark gold artistic theme.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer

# 2. Start dev server
npm start
# Opens at http://localhost:3000
```

## 📁 Structure

```
src/
├── App.jsx              # Root — wires all sections
├── data.js              # ALL content — edit here!
├── index.css            # Global styles & animations
└── components/
    ├── Navbar.jsx        # Sticky nav with mobile menu
    ├── Hero.jsx          # Landing section
    ├── About.jsx         # About Shubham
    ├── Artforms.jsx      # 5 art discipline cards
    ├── Gallery.jsx       # Artwork gallery grid
    ├── Philosophy.jsx    # Art philosophy & timeline
    ├── Contact.jsx       # Commission & contact
    └── Footer.jsx        # Footer
```

## 🎨 Adding Real Artworks

1. Put your image files in the `public/` folder (e.g. `portrait1.jpg`)
2. In `Gallery.jsx`, replace the emoji with:
```jsx
<img src="/portrait1.jpg" alt="Portrait artwork" className="w-full h-full object-cover" />
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import at vercel.com → **Create React App** framework
3. Deploy!

## ✏️ Customise

Edit `src/data.js` to update all text, links, and content.
Edit `src/index.css` to change colours (CSS variables at top).
