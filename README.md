# kyrajolly.com — Site Guide

A cinematic editorial portfolio website. Pure HTML, CSS, and minimal JavaScript. GitHub Pages ready.

## File Structure

```
/
├── index.html          → Home page
├── about.html          → About Me
├── films.html          → Film portfolio (with year filter)
├── finance.html        → Finance & Economics blog
├── book-reviews.html   → Book reviews grid
├── film-reviews.html   → Film reviews grid
├── css/
│   └── style.css       → All shared styles (well-commented)
├── js/
│   └── main.js         → Navigation, filters, animations
└── assets/
    └── images/         → Put your images here
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository named `kyrajolly.github.io`
   (or any repo, then enable Pages in Settings → Pages)
2. Set source to `main` branch, root folder
3. Your site will be live at `https://kyrajolly.github.io`

## Adding Content

### Add a New Film (films.html)

Copy and paste this block inside the `<section>` on films.html:

```html
<article class="film-entry fade-in" data-year="2025">
  <div>
    <div class="film-entry__number">06</div>
    <span class="label">Short Film · 2025</span>
    <div class="section-rule" style="margin-top:0.75rem;"></div>
    <h2 class="film-entry__title">Your Film Title</h2>
    <div class="film-entry__meta">Dir. Kyra Jolly &nbsp;·&nbsp; 2025 &nbsp;·&nbsp; 15 min</div>
    <p class="film-entry__synopsis">
      Your film synopsis goes here. A few sentences about the film's themes and story.
    </p>
    <div style="display:flex; gap:1rem; flex-wrap:wrap;">
      <a href="YOUR_LINK" class="btn btn--primary">Watch now →</a>
      <a href="#" class="btn btn--outline">Film details</a>
    </div>
  </div>
  <div>
    <div class="film-poster">
      <img src="assets/images/your-poster.jpg" alt="Film poster">
      <div class="film-poster__label">2025 · 15 min</div>
    </div>
  </div>
</article>
```

Change `data-year="2025"` to match the year so the year filter works.
Add `.reverse` class on alternating entries for visual rhythm.

---

### Add a Finance/Economics Post (finance.html)

Copy this block into the `<main>` feed on finance.html:

```html
<article class="post-item fade-in" data-topic="macro">
  <div>
    <div class="post-item__date">March 1, 2025</div>
    <h2 class="post-item__title">Your Essay Title</h2>
    <p class="post-item__excerpt">
      A short 2–3 sentence description of the essay.
    </p>
    <div style="margin-top:1rem;">
      <a href="#" class="btn btn--ghost">Read essay →</a>
    </div>
  </div>
  <div style="flex-shrink:0;">
    <span class="topic-pill" style="margin:0;">Macro</span>
  </div>
</article>
```

Available `data-topic` values: `macro`, `markets`, `inequality`, `tech`, `history`

---

### Add a Book Review (book-reviews.html)

Copy this card into the `.reviews-grid` on book-reviews.html:

```html
<article class="review-card fade-in" data-topic="fiction">
  <div class="review-card__cover" style="background: linear-gradient(145deg, #1A2D5A, #2D1B69);">
    <!-- Or use: <img src="assets/images/books/your-book.jpg" alt="Book cover"> -->
    <div class="review-card__cover-text">
      <div class="review-card__cover-title">Book Title</div>
      <div class="review-card__cover-author">Author Name</div>
    </div>
  </div>
  <div class="review-card__body">
    <div class="review-card__genre">Fiction · Literary</div>
    <div class="stars">★★★★☆</div>
    <p class="review-card__excerpt">Your short review excerpt here.</p>
    <a href="#" class="btn btn--ghost" style="margin-top:auto;">Read review →</a>
  </div>
</article>
```

Available `data-topic` values: `fiction`, `nonfiction`, `essays`, `poetry`

---

### Add a Film Review (film-reviews.html)

Copy this card into the `.reviews-grid-films` on film-reviews.html:

```html
<article class="film-review-card fade-in" data-topic="contemporary">
  <div class="film-review-card__still" style="background: linear-gradient(145deg, #1A2D5A, #2D1B69);">
    <!-- Or: <img src="assets/images/reviews/your-film.jpg" alt="Film still"> -->
    <div class="film-review-card__still-overlay">
      <span class="film-review-card__year">2025</span>
    </div>
  </div>
  <div class="film-review-card__body">
    <div class="film-review-card__director">Dir. Director Name</div>
    <h3 class="film-review-card__title">Film Title</h3>
    <div class="stars">★★★★☆</div>
    <p class="film-review-card__excerpt">Short review excerpt.</p>
    <a href="#" class="btn btn--ghost">Read review →</a>
  </div>
</article>
```

Available `data-topic` values: `contemporary`, `arthouse`, `classic`, `documentary`

---

## Adding Your Photos

Replace placeholder divs with `<img>` tags:

**Profile photo (about.html):**
```html
<!-- Find the about-img-main div and replace the inner span with: -->
<img src="assets/images/profile.jpg" alt="Kyra Jolly">
```

**Book covers:** Place in `assets/images/books/`

**Film stills/posters:** Place in `assets/images/films/`

**Film review stills:** Place in `assets/images/reviews/`

---

## Personalising

All personal details to update:

| Where | What to change |
|-------|---------------|
| All `<title>` tags | Your name |
| `nav__logo` | Your name |
| `footer__logo` | Your name |
| `about.html` | Bio text, location, institution |
| `index.html` | Hero stats (number of films) |
| All `href="mailto:..."` | Your email address |
| All `href="#"` social links | Your actual social URLs |

---

## Design System Quick Reference

**Colors** (defined in `css/style.css` `:root`):
- `--navy` — dark background
- `--blue` — accent/links
- `--cream` — warm background sections

**Button classes:** `btn--primary`, `btn--outline`, `btn--ghost`, `btn--white`

**Animation:** Add `class="fade-in"` to any element — it will animate in on scroll automatically.
Add `fade-in-delay-1` through `fade-in-delay-4` for staggered effects.
