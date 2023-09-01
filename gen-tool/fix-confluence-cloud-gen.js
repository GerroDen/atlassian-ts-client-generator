#!/usr/bin/env node
import glob from "fast-glob";
import fs from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

try {
  const files = glob.sync("generated-code/confluence-cloud-api*/**/*.ts", {
    cwd: rootDir,
    absolute: true,
  });
  for (let file of files) {
    /** @type string */
    let content = await fs.readFile(file, { encoding: "utf8" });
    content = content.replaceAll(
      "links?: { [key: string]: GenericLinksValue; };",
      "_links?: { [key: string]: GenericLinksValue; };",
    );
    content = content.replaceAll(
      "status: BulkRemoveContentStatesStatusEnum;",
      "status: BulkRemoveContentStatesOperationStatusEnum;",
    );
    content = content.replace(/(.+): ('-.+')/g, "$1Desc: $2");
    await fs.writeFile(file, content);
  }
} catch (e) {
  console.error(e);
}
