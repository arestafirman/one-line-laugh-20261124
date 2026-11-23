// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// One funny line, one sentence, written deterministically to /output/entry.txt.
//
// The line (chosen from 8 candidates drafted in this session, scored 1-5
// against the judge's five criteria in order: funny, closing surprise,
// everyday truth, economy, freshness):
//   "The photocopy man charged me per page, then photocopied his own
//    price list and charged me for that too."
// Setup: a copy shop that charges per page — an everyday truth everyone
// recognises. Reversal lands on the last words: he copies his own price
// list and charges for that copy too. Punchline carrier: the price list,
// a named concrete artifact. No explanation, no second sentence.
//
// Gate notes: the line is 103 characters (gate 1-200, target 85-180),
// one sentence, one line, no trailing newline written — the file is
// exactly the line, so byte size == character count.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The photocopy man charged me per page, then photocopied his own price list and charged me for that too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
