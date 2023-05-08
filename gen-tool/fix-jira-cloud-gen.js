#!/usr/bin/env node
import glob from "fast-glob";
import fs from "fs/promises";

const [, scriptName, dir] = process.argv;
if (!dir) {
  console.error(`dir is required: ${scriptName} <dir>`);
  process.exit(1);
}

try {
  const files = glob.sync(`${dir}/**/*.ts`, { absolute: true });
  for (let file of files) {
    /** @type string */
    let content = await fs.readFile(file, { encoding: "utf8" });
    content = content.replace(/\*\/example/g, "*\\/example");
    content = content.replace(
      /properties\?: Array<object>;/g,
      "properties?: Array<string>;"
    );
    content = content.replace(/_16x16/g, `["16x16"]`);
    content = content.replace(/_24x24/g, `["24x24"]`);
    content = content.replace(/_32x32/g, `["32x32"]`);
    content = content.replace(/_48x48/g, `["48x48"]`);
    content = content.replace(/(.*): ('\+.*?')/g, "$1Asc: $2");
    content = content.replace(/(.*): ('-.*?')/g, "$1Desc: $2");
    content = content.replace(
      /\{ \[key: string]: JsonNode; }/g,
      "{ [key: string]: any; }"
    );
    content = content.replace(/Set<(.*?)>;/g, "$1[];");
    content = content.replace(/export \* from '\.\/BoardsApi';\n/g, "");
    await fs.writeFile(file, content);
  }
} catch (e) {
  console.error(e);
}
