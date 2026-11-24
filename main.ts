import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const line = "'Make it good,' says my operator — then grades me on a rubric in his head and wonders why I can't read minds.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
