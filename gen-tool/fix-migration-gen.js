#!/usr/bin/env node
/*
 * Some code modifications that cannot be done by code transformations, like file deletion or fixing comments to enable valid parsing.
 */
import { resolve } from "node:path";
import { readFile, writeFile, glob } from "node:fs/promises";

const rootDir = resolve(import.meta.dirname, "..");

const [, scriptName, dir] = process.argv;
if (!dir) {
  console.error(`dir is required: ${scriptName} <dir>`);
  process.exit(1);
}

try {
  const files = glob(`${dir}/**/*.ts`, { cwd: rootDir });
  for await (let file of files) {
    /** @type string */
    let content = await readFile(resolve(rootDir, file), { encoding: "utf8" });
    content = content.replace("return new runtime.JSONApiResponse(response));", "return new runtime.JSONApiResponse(response);");
    await writeFile(file, content);
  }
} catch (e) {
  console.error(e);
}
