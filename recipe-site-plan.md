# Recipe Collection Website — Project Plan

## 1. One-sentence purpose
A personal site that displays my saved recipes in a clean, cozy-styled format, with credit to original creators.

## 2. v1 / MVP — what counts as "done"
- [ ] Homepage with 2–3 recipe cards
- [ ] Each card links to its own recipe page
- [ ] Each recipe page shows ingredients, steps, and a creator credit
- [ ] Styled consistently in the cozy/rustic theme

**Not in v1** (later phases): search/filter, unit conversion, JS interactivity, backend/database, Anthropic API integration.

## 3. Design direction
- **Vibe:** cozy / rustic
- **Colors:** warm colors, kraft paper tones
- **Fonts:** serif, e.g. Playfair Display (headings), pair with a simple readable body font
- **Layout:** card grid on homepage → individual recipe page per card

## 4. Task list

### Structure
- [ ] Homepage HTML skeleton (header, recipe card grid, footer)
- [ ] One recipe page HTML skeleton (title, image, ingredients list, steps list, credit link)
- [ ] Duplicate recipe page template for recipe #2 and #3

### Styling
- [ ] Set up CSS variables (`:root`) for colors + fonts
- [ ] Style the recipe cards (homepage)
- [ ] Style the recipe page layout
- [ ] Responsive check (mobile/narrow width)

### Content
- [ ] Pick 2–3 recipes
- [ ] Write out ingredients/steps for each
- [ ] Get + credit the original creator for each

## 5. Build order
1. Plain HTML structure first (no CSS) — get content right
2. Add base styles globally (colors, fonts, spacing)
3. Fully style one recipe card, then copy to the others
4. Polish + responsive pass at the end

## 6. Future phases (not now)
- **Phase 1:** JS — search/filter, unit conversion
- **Phase 2:** Personal delight features (small JS touches, animations)
- **Phase 3:** Backend/database, possible Anthropic API integration (e.g. paste-recipe formatter)

## Notes
*(add anything here as you go — ideas, blockers, things to revisit)*
