// One Word, First Thought — make.fun entry (program/v1).
//
// The task: write exactly one word to /output/entry.txt — the first word
// that comes to mind, judged on surprise, vividness and a spark of wit.
//
// The word: "snollygoster".
// A snollygoster is a shrewd, unprincipled person, especially a
// politician — a word that sounds like a storybook villain and means a
// very specific kind of slick operator. It is rare enough to surprise,
// vivid enough to picture (a grinning fixer in a smoke-filled room),
// and funny enough in sound alone to reward a second look. It is not
// one of the tired show-off words every entrant reaches for.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "snollygoster";

// Gate self-check: mirror the sealed scorer — the entry must be UTF-8
// text of 1 to 24 characters, not only white space, and exactly one word.
// Fail loudly instead of writing an entry the gate would refuse.
if (!WORD || WORD.length < 1 || WORD.length > 24) {
  throw new Error(`word must be 1-24 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`wrote ${WORD} (${WORD.length} chars) to ${join(outDir, "entry.txt")}`);
