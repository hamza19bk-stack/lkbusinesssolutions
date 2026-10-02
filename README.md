# LK Business Solutions — lkbusinesssolutions.shop

Static brochure site for **LK BUSINESS SOLUTIONS LTD**, built with Astro and published on
GitHub Pages at <https://lkbusinesssolutions.shop>.

## Registered company details

Every value below comes from the public register and was last checked on
2 October 2026.

| | |
|---|---|
| Registered name | LK BUSINESS SOLUTIONS LTD |
| Company number | 14896950 |
| Registered in | England and Wales |
| Registered office | Lk Business Solutions Ltd, 124 City Road, London, England, EC1V 2NX |
| Company type | Private limited company |
| Incorporated | 26 May 2023 |
| Register status | Active |
| Director | Sarah Preethi George |
| Public record | https://find-and-update.company-information.service.gov.uk/company/14896950 |

### Nature of business (SIC)

| Code | Description |
|---|---|
| 46310 | Wholesale of fruit and vegetables |
| 46370 | Wholesale of coffee, tea, cocoa and spices |
| 70229 | Management consultancy activities other than financial management |
| 96020 | Hairdressing and other beauty treatment |

Section 82 of the Companies Act 2006 requires the registered name, company
number, place of registration and registered office to appear on the website.
The footer does this on every page, and `npm run check` fails if any of the
three is missing from a built page.

## What still needs filling in

`src/data/site.ts` > `contact` and `social` are deliberately empty. Nothing is
invented, so an empty value simply removes its card or line from the page. Run
`npm run check` for the current checklist.

## Commands

| Command | What it does |
|---|---|
| `npm install` | install dependencies |
| `npm run dev` | local dev server |
| `npm run build` | build to `dist/` |
| `npm run check` | build, then the full quality check (contrast, dead links, statutory disclosure, forbidden claims) |

## Editing the content

| File | Holds |
|---|---|
| `src/data/site.ts` | facts: register details, contact, navigation, SEO |
| `src/data/overrides.ts` | this site's page copy |
| `src/data/copy.ts` | the shared base copy that overrides are merged over |
| `src/styles/theme.css` | the whole visual identity (colours, fonts, radii) |

Theme: `light`, layout family `default`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: quality check, build,
then deploy to GitHub Pages. A failing check blocks the deploy.
