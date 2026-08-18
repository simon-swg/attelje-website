# Attelje — Canon

Frozen except by a dated decision in `aios/LOG.md`. Canon is supposed to freeze; staleness
here is not a defect and `aios check` never reports it.

## Identity

Attelje is a brand and communications consultancy in Gothenburg, run by Simon Attwater as
a sole trader. Twenty-five years of senior international brand experience, delivered
directly to SMEs, startups and growth companies that want strategic creative without
agency overhead.

**It is not an agency, not a team, and not a Silly Wizards venture.** The second half
matters more. There are no layers, no handoffs and no junior team doing the work while
someone senior attends the meetings — removing exactly that is the proposition. Attelje
sits *alongside* the Guild, not inside it; others may assist on projects, but the brand,
the invoicing and the accountability are Simon's alone.

This repo is the website and the brand assets it ships with. It is not the business.

## Purpose

A client gets clear thinking and strong ideas from the person who will actually do the
work. The site exists to make that credible in about thirty seconds — the work does the
talking, and the reader either recognises the standard or does not.

## Principles

1. **Calm. Considered.** No taglines, no announcements, no shouting. The register is
   warm-editorial and lightly literary — the Attelier family voice at a cooler, airier
   Swedish temperature.
2. **The work does the talking.** Case pages carry an image, one line of context, and the
   work sequenced properly. No lengthy rationale, no bullet-point deliverables.
3. **Adaptation, not invention.** The visual system is inherited from Attelier — the
   parent studio — and adapted. It was never a greenfield build, and treating it as one
   reopens decisions that are already made.
4. **Pearl, Plum, Mint, Black.** Four colours. II Vorkurs throughout.
5. **Photography is black and white with colour graphics laid over the top** — never
   colour inside the image itself.
6. **Hand-built, no framework.** Plain HTML and CSS that deploys on push. Weight earns
   its place or it does not ship.
7. **Simon writes and approves the copy.** He is a strong copywriter. An AI may draft;
   it does not sign off.

## Anti-patterns

- **The yellow call-to-action.** Inherited from the Attelier system and deliberately
  stripped. Attelje runs four colours, and yellow is not one of them.
- **Framer.** The plan named Framer as the build platform. The site was hand-built in
  HTML and CSS instead, and is better for it. The plan is what drifted, not the site.
- **Broken text encoding.** Three pages carried triple-encoded characters in live copy
  and page titles for months — visible in browser tabs, in search results, and in the
  services line on About. Anything that edits HTML here preserves UTF-8, and the titles
  get looked at afterwards.
- **A hand-written running record.** `_Project Notes.md`, on disk beside this repo, held
  build status, platform and the case list. All three had gone stale while the file still
  read as current. That file is history now; this repo is the record.

## What must not be touched

- **The palette and the typeface.** Pearl, Plum, Mint, Black and II Vorkurs are the
  family signature, shared with the parent studio. They are not a style choice to revisit.
- **The hand-built stack.** No framework, no build step. Load-bearing because it is what
  lets one person ship and deploy without maintaining a toolchain.
- **The nine cases as the shape of the work grid.** Three by three. Adding a tenth is a
  layout decision, not a content one.
- **Private material stays out of this repo.** The business plan, tax and registration
  documents, credit records, personal identity numbers and commercial rates live in the
  folders on disk and never in git — write the pointer, not the payload (AiOS canon §6).
  This binds whatever `Visibility:` says.
