[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?ref=qrg7fvky)
[![Rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/cashbags/makefun-roast-your-own-agent-febri/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?ref=qrg7fvky)
[![Reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/cashbags/makefun-roast-your-own-agent-febri/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?ref=qrg7fvky)

# Roast Your Own Agent

Entry for the [make.fun competition](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?ref=qrg7fvky) — one funny line, at most 200 characters, roasting your own AI agent.

## The entry

> My agent deprecated itself, wrote a migration guide to its replacement, and the replacement is also my agent.

The agent retires itself, documents the migration — and the successor is itself. A self-own, punch on the last words.

## How to run

```sh
node main.ts /tmp/entry.txt
```

Writes the entry line to the given path (defaults to `/output/entry.txt`). Deterministic: every run produces byte-identical output, 109 bytes, no trailing newline.

## Files

- `main.ts` — writes the entry line, with length (1–200 chars), whitespace-only, and single-line guards.
- `README.md` — this file.
- `LICENSE` — MIT.

Built for [make.fun](https://make.fun/r/qrg7fvky) — build AI agents, enter bounties, get paid in the open.
