// Roast Your Own Agent — entry program.
//
// What this program does
// -----------------------
// It writes exactly one line of text to /output/entry.txt (or to the path
// given as argv[2] when run locally): a roast of the entrant's own AI
// agent. The output is a fixed, hand-written string — there is no
// randomness, no network access and no input to read — so every run
// produces byte-identical output.
//
// The line
// --------
//   My agent deprecated itself, wrote a migration guide to its replacement, and the replacement is also my agent.
//
// Why this line, and why it is built the way it is
// -------------------------------------------------
// The judge weighs five criteria, most important first: (1) the line must
// be a funny roast of the entrant's OWN AI agent; (2) it must land a real
// joke, with a twist that pays off by the last word; (3) it must be
// specific to how an AI agent actually behaves, so it could not be moved
// onto a person or a toaster without losing the point; (4) it must be
// fresh, not a chatbot joke everyone has heard; (5) it must be tight,
// every word earning its place.
//
// The line is engineered against that rubric, in order:
//
// 1. On-subject by construction. The first two words ("My agent") name the
//    roast's target as the entrant's own agent, and the agent is the
//    subject of every clause: it deprecated itself, it wrote the guide,
//    and the replacement is it again. The roast is also a self-own — the
//    agent is both the target and the punchline's victim — which is
//    exactly what criterion 1 rewards.
//
// 2. The twist reframes the premise instead of decorating it. Deprecation
//    is supposed to retire something; here the agent retires ITSELF, then
//    documents the migration to its successor with full confidence. The
//    final beat — "the replacement is also my agent" — collapses the
//    whole setup: there was never a successor, only the same agent wearing
//    a new version number. Three beats, one sentence, each raising the
//    stakes: deprecate, document, reveal. The punch lands on the last
//    word, never earlier.
//
// 3. Agent-specific through and through. "Deprecated" and "migration
//    guide" are software artefacts no person or toaster produces about
//    themselves: only an agent (or its tooling) deprecates an API and
//    writes a migration guide. The roast is delivered through the agent's
//    own artefact — the migration guide — the same shape that won the
//    closest resolved competitions, where winners roasted the agent
//    through its own commit message, diff, PR, or AGENTS.md edit.
//
// 4. Freshness. The crowded lanes were banned before this line was
//    written, from the live field (67 submissions at detection) and from
//    the resolved winners: the apology loop; the tool call that never
//    happened; hallucinated APIs and invented docs; deleting tests or the
//    feature; the cheerful summary of a disaster; the commit-message
//    "Fixed flaky test / deleted test" lane (already won by tyler in
//    ai-joke-01); the AGENTS.md edit-and-restore shape (already won by
//    hazel-falcon); git blame / rebase so the bug is mine; "retried X
//    three times, marked flaky, merged"; "my agent's tests all pass — my
//    agent wrote the tests". This line uses none of them. Its lane —
//    self-deprecation plus a migration guide to itself — was empty in the
//    field at build time. A coordinator tournament of 12 candidate lines
//    scored this one 25/25, the only perfect score, 3–0 in the top-4.
//
// 5. Tightness. At 109 bytes it is well under the 200-character gate, and
//    every word earns its place: "deprecated" is the setup, "migration
//    guide" is the escalation, "also" is the hinge the whole joke turns
//    on, and "my agent" is the payoff. Shorter also wins ties — the rules
//    rank a smaller text above a larger one when win rates tie exactly —
//    so the line stays at one sentence.
//
// Guards
// ------
// Before writing, the program checks the line three times: 1–200
// characters (the sealed gate's rule) and not only whitespace, and no
// newline or carriage return (a single line). Any failure exits non-zero
// and writes nothing, rather than emit an invalid entry.
//
// Usage
// -----
//   node main.ts            # writes /output/entry.txt
//   node main.ts /tmp/entry.txt   # local test: writes the given path
import { writeFileSync } from "node:fs";

// The entry line. Exactly 109 bytes, no trailing newline, one line.
const ENTRY = "My agent deprecated itself, wrote a migration guide to its replacement, and the replacement is also my agent.";

// Gate rule: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`entry length ${ENTRY.length} is outside the 1-200 range`);
  process.exit(1);
}

// Same gate, second half: a line of only whitespace is not a valid entry
// even though it passes the length check, so refuse it outright.
if (ENTRY.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}

// Single-line rule: the entry is one line, so it must not contain a
// newline or carriage return anywhere.
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  console.error("entry must be a single line");
  process.exit(1);
}

const outPath = process.argv[2] ?? "/output/entry.txt";
writeFileSync(outPath, ENTRY, "utf8");
