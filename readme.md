# 🍞🥕 bread & carrot

A personal scrapbook website for our adventures together.

---

## 📁 File structure

```
/
├── index.html              ← Homepage (activity grid by year)
├── activities/
│   └── template.html       ← Copy this for each new activity
├── css/
│   └── style.css           ← All styles + animations
├── js/
│   └── main.js             ← Scroll reveal + page transitions
└── assets/
    ├── images/             ← Put your photos here
    │   └── activity-name/  ← One folder per activity
    └── decorations/        ← Stickers, ribbons, etc (optional)
```

---

## ➕ Adding a new activity

1. **Copy** `activities/template.html` and rename it (e.g. `activities/ramen-date.html`)
2. Update the `<title>`, header title, date tag, and subtitle
3. Replace the placeholder `<div>` blocks with `<img>` tags pointing to your photos
4. Add your photos to `assets/images/your-activity-name/`
5. Add a card for it in `index.html` inside the correct year section
6. Update the `← previous` and `next →` links on neighbouring activity pages

### Photo paths (from inside `activities/`)
```html
<img src="../assets/images/picnic/cover.jpg" alt="Picnic cover">
```

### Collage layouts
Add one of these classes to `.collage` to change the grid:
| Class | Layout |
|---|---|
| `collage--1` | Single full-width photo |
| `collage--2` | Two photos side by side |
| `collage--3` | One big left + two stacked right |
| `collage--4` | 2×2 grid |

---

## 🚀 Hosting on GitHub Pages

1. Push all files to your GitHub repo (make sure `index.html` is at the **root**)
2. Go to your repo → **Settings** → **Pages**
3. Under *Source*, select **Deploy from a branch**
4. Choose `main` branch, `/ (root)` folder → click **Save**
5. Your site will be live at `https://your-username.github.io/your-repo-name/`

> Changes go live ~1 minute after you push to `main`.

---

## 🎨 Customisation tips

- **Colours** — edit the `:root` variables at the top of `css/style.css`
- **Fonts** — swap the Google Fonts import URL in `style.css`
- **Decorations** — add/move the `<span class="deco">` emoji elements anywhere in the HTML
- **Scroll animations** — wrap any element in `<div class="reveal">` to fade it in on scroll
- **Staggered grid** — wrap a group in `<div class="reveal-stagger">` to cascade in one by one