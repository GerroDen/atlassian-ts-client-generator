#!/usr/bin/env node
/*
 * Some code modifications that cannot be done by code transformations, like file deletion or fixing comments to enable valid parsing.
 */
import { readFile, rename, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const [, scriptName, dir] = process.argv;
if (!dir) {
  console.error(`dir is required: ${scriptName} <dir>`);
  process.exit(1);
}

try {
  await rename(resolve(rootDir, dir, "src/apis/DefaultApi.ts"), resolve(rootDir, dir, "src/apis/PermissionSkippedApi.ts"));
  const indexFilePath = resolve(rootDir, dir, "src/apis/index.ts");
  let content = await readFile(indexFilePath, { encoding: "utf8" });
  content = content.replace("export * from './DefaultApi';", "export * from './PermissionSkippedApi';");
  await writeFile(indexFilePath, content);
} catch (e) {
  console.error(e);
}
