# TASK_001 — The site is current, correct and carries the videos

**Status:** In progress
**Opened:** 2026-08-18

## Output

The live site at its own domain, with the sizzle reels in place and nothing on it that
contradicts what Attelje actually offers.

## Constraints

- Hand-built HTML and CSS. No framework, no build step (canon, What must not be touched).
- Pearl, Plum, Mint, Black; II Vorkurs. No yellow (canon, Principle 4 and Anti-patterns).
- Copy is Simon's to write and sign off (canon, Principle 7).
- Any edit to an HTML file preserves UTF-8 and the page titles get checked afterwards
  (canon, Anti-patterns).
- No business-plan, tax, rate or identity material enters this repo (canon, canon §6).

## Done when

- [x] The three pages with broken character encoding are repaired and pushed
- [ ] `attelje.com` resolves to the live deployment
- [ ] The homepage hero video plays, and each case page that should carry a sizzle reel does
- [ ] Every case page under `work/` has been opened in a browser and reads correctly on a phone
- [ ] The About page logo marquee is settled — sizing and mono treatment confirmed, not "rough"
- [ ] `hello@attelje.com` receives a real test email

A task without a checkbox list has no exit condition, and a task with no exit condition
never closes. Tick what is actually done, never aspirationally. When complete,
`git mv` this file to `tasks/done/` — never `rm`.
