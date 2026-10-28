# Project structure and editing guide

This refactor changes file organization and readability. Existing page content, URLs, provider data, images, class names, animations, and behavior are retained.

## Start here

- `src/App.jsx`: all routes, shared header/footer, the single `<main>` landmark, and reduced-motion configuration.
- `src/pages/Home.jsx`: homepage section order and the existing ranking reveal animation.
- `src/components/layout/Header.jsx` and `Header.css`: navigation, mobile menu, Escape-to-close, and sticky glass header.
- `src/data/providers.js`: provider content, images, coverage, feature flags, sponsorship, ordering, pricing, and destination URLs.
- `src/styles/index.css`: explicit loading order for all stylesheets. All page styles load once, so navigation history does not change styling.

## Folder layout

```text
src/
  App.jsx
  main.jsx
  pages/                 Full routed pages and their CSS entry files
  components/
    layout/              Brand, Header, Footer
    home/                Hero, FeatureStrip, WhyChooseUs,
                         EducationalResources, HomeFAQ, ClosingCTA
    providers/           TopProviders, ProviderCard, ProviderLogo
    comparison/          ComparisonSection, ComparisonTable
    education/           ArticleCards
    common/              PageIntro, SampleNotice, MethodologySection,
                         InformationPageContent
    reviews/             ProviderReviewContent
  data/                  providers, articles, faqs, policies, navigation
  hooks/                 useSeo
  styles/                index.css, global.css, reading.css
public/
  images/                Existing local photographs and image credits
  sitemap.xml
  robots.txt
  _redirects
scripts/                 Refactor verification scripts (no runtime dependency)
verification/            Baseline screenshots and verification results
```

Every component has a same-named CSS file. Every page has a same-named CSS entry file. Pages that only compose shared sections intentionally have comment-only CSS files; edit the section styles for existing presentation, or add future page-only rules there. No wrapper elements were added merely to enable styling.

## Pages and routes

- `/` — `pages/Home.jsx`
- `/compare` — `pages/CompareServices.jsx`
- `/best-credit-monitoring` — `pages/TopPicks.jsx`
- `/reviews` — `pages/Reviews.jsx`
- `/reviews/:slug` — `pages/ProviderReview.jsx`; review body in `components/reviews/ProviderReviewContent.jsx`
- `/education` — `pages/Education.jsx`
- `/education/:slug` — `pages/EducationArticle.jsx`, including the existing article structured-data effect
- `/about` — `pages/About.jsx`
- `/contact` — `pages/Contact.jsx`
- `/methodology` — `pages/Methodology.jsx`
- `/editorial-policy` — `pages/EditorialPolicy.jsx`
- `/advertiser-disclosure` — `pages/AdvertiserDisclosure.jsx`
- `/privacy` — `pages/PrivacyPolicy.jsx`
- `/terms` — `pages/Terms.jsx`
- Unknown routes — `pages/NotFound.jsx`

Each page owns its SEO call and imports its own existing sections. Information pages share `InformationPageContent` to avoid duplicating their identical reading layout; their exact text is in `data/policies.js`.

## Homepage, in rendering order

1. `components/home/Hero.jsx` / `Hero.css`
2. `components/home/FeatureStrip.jsx` / `FeatureStrip.css`
3. `components/home/WhyChooseUs.jsx` / `WhyChooseUs.css`
4. `components/providers/TopProviders.jsx` / `TopProviders.css`
5. `components/comparison/ComparisonSection.jsx` / `ComparisonSection.css`
6. `components/common/MethodologySection.jsx` / `MethodologySection.css`
7. `components/home/EducationalResources.jsx` / `EducationalResources.css`
8. `components/home/HomeFAQ.jsx` / `HomeFAQ.css`
9. `components/home/ClosingCTA.jsx` / `ClosingCTA.css`

`Home.jsx` preserves the ranking section's existing `motion.div` wrapper and animation settings. Hero and WhyChooseUs keep their own existing animations. Keep these wrappers when moving sections if you want the same behavior.

## Styling and colors

- `styles/global.css` contains the existing Google Font and Tailwind imports, root design tokens, resets, base typography, focus styles, and essential shared classes such as `.container`, `.button`, `.section`, and `.section-heading`.
- Section styling, hover states, and responsive overrides live beside the matching JSX file.
- `styles/reading.css` contains the shared article, review, and policy reading layout, including its existing nested methodology overrides.
- Page banners are in `components/common/PageIntro.css`, including the About and review image backgrounds.
- FAQ accordion defaults are in `components/home/HomeFAQ.css`; these also style the existing review FAQ.
- Shared provider-brand visuals are in `components/providers/ProviderLogo.css`, including comparison-table variants.

The original stylesheet includes literal colors as well as CSS variables. Changing a root token will not automatically change every literal color; edit the owning component CSS when needed.

Selectors and specificity are retained. A few commented rules in Header.css, PageIntro.css, and ArticleCards.css preserve source-order interactions from the previous combined stylesheet. Do not remove them as apparent duplicates without checking narrow-screen widths and laptop grid spacing.

All CSS imports remain centralized in `styles/index.css`; do not also import the same styles in individual components. This keeps loading predictable and avoids route-dependent overrides. The Tailwind/Vite setup and package versions are unchanged.

## Content, cards, images, and CTA links

- Provider names, descriptions, pros/cons, images, image alt text, feature flags, and URLs: `data/providers.js`.
- Provider-card structure, feature labels, Learn More button, and review link: `components/providers/ProviderCard.jsx`.
- Provider-list heading, disclosure position, and list rendering: `components/providers/TopProviders.jsx`.
- Comparison filter/sort state and labels: `components/comparison/ComparisonSection.jsx`.
- Table columns, cell rendering, and review destinations: `components/comparison/ComparisonTable.jsx`.
- Review headings and provider-availability CTA: `components/reviews/ProviderReviewContent.jsx`.
- Educational text: `data/articles.js`.
- Educational card photograph rotation and alt text: `components/education/ArticleCards.jsx`.
- Homepage FAQ questions and answers: `data/faqs.js`.
- Information-page content: `data/policies.js`.
- Header navigation destinations and labels: `data/navigation.js`; header CTA remains in `Header.jsx`.
- Footer link groups: `components/layout/Footer.jsx`.
- Other section-specific headings, descriptions, images, and CTAs stay directly in their owning JSX file.
- CSS background photographs are in Hero-related styling where applicable, PageIntro.css, EducationalResources.css, and ClosingCTA.css. Search `/images/` to locate every image reference.

`data/content.js` remains a compatibility re-export of providers, articles, and FAQs. Edit the focused data files rather than this compatibility entry point.

## Adding a section

1. Create a descriptively named JSX file in `components/home/` (or the relevant feature folder).
2. Add its same-named CSS file and import that stylesheet from `styles/index.css`.
3. Import the component into the page and place it in the desired order.
4. Reuse existing shared utility classes where appropriate. Avoid adding wrapper markup unless the section needs it.
5. Verify layout, keyboard access, and reduced-motion behavior.

## Adding a page

1. Create `pages/YourPage.jsx` and `pages/YourPage.css`.
2. Compose existing sections or create focused new ones; call `useSeo` with the page title and description.
3. Register the route in `App.jsx` and its CSS import in `styles/index.css`.
4. Add navigation links only where intended.
5. Add its path to `generate-sitemap.js`, then run `node generate-sitemap.js`.

## Adding a provider

1. Add an object in `data/providers.js` using the existing field structure and an unused `id`.
2. Add its image under `public/images/` and supply accurate alt text.
3. The existing `.map()` assigns `order` from array position and sets `price` and `url` to `null`. This behavior is deliberately unchanged. To introduce a live URL or pricing later, explicitly update that data-normalization step as a separate functional change.
4. Cards, comparison rows, and `/reviews/:slug` resolve from the provider array automatically.
5. Run `node generate-sitemap.js` when adding providers or article slugs.

Current providers remain fictional sample entries. This refactor does not activate offers or alter campaign behavior.

## SEO and existing interactions

`hooks/useSeo.js` preserves titles, descriptions, canonicals, Open Graph tags, and route scroll-to-top. Article JSON-LD is still created and cleaned up in EducationArticle.jsx. Header listeners remain in Header.jsx. Comparison state remains local to ComparisonSection.jsx. FAQ accordions remain native `<details>` elements.

No API, form backend, analytics, account system, or affiliate tracker was present; none was introduced.

## Commands and verification

```sh
npm run dev
npm run lint
npm run build
node generate-sitemap.js
node scripts/verify-refactor.js
node scripts/check-css.js
```

The verification scripts use packages already installed with the existing build tools; no dependencies were added. They refer to the sibling baseline backup, so retain that folder to rerun comparisons. `verify-refactor.js` compares 25 routes after insignificant markup-whitespace normalization, checks content data, and verifies unchanged assets/configuration. It creates and removes temporary rendering bundles under verification/.

Before/after screenshots and browser measurements are saved in `verification/`. Browser screenshot comparison is limited to the current in-app-browser viewport; CSS cascade checks at seven widths supplement it and are not a replacement for screenshots at those widths.

## Backup

A complete pre-refactor backup, including installed dependencies and build output, is stored at:

`E:\piyasharmawebwork\creditscoremonitoringoffers-backup-20261027-refactor`

All 8,419 original files were verified against the backup using SHA-256 before source extraction.
