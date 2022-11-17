#!/usr/bin/env node
import glob from "glob";
import { promises as fs } from "fs";

try {
  const files = glob.sync("generated-code/jira-cloud-api/**/*.ts", {
    absolute: true,
  });
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
    await fs.writeFile(file, content);
  }
} catch (e) {
  console.error(e);
}
