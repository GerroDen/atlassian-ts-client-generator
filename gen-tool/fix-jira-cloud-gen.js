#!/usr/bin/env node
/*
 * Some code modifications that cannot be done by code transformations, like file deletion or fixing comments to enable valid parsing.
 */
import glob from "fast-glob";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const [, scriptName, dir] = process.argv;
if (!dir) {
  console.error(`dir is required: ${scriptName} <dir>`);
  process.exit(1);
}

try {
  const files = glob.sync(`${dir}/**/*.ts`, { absolute: true, cwd: rootDir });
  for (let file of files) {
    /** @type string */
    let content = await readFile(file, { encoding: "utf8" });
    content = content.replace(/\*\/example/g, "*\\/example");
    await writeFile(file, content);
  }
} catch (e) {
  console.error(e);
}
