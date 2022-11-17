#!/usr/bin/env node
import glob from "glob";
import { promises as fs } from "fs";

try {
  const files = glob.sync("generated-code/confluence-cloud-api/**/*.ts", {
    absolute: true,
  });
  for (let file of files) {
    /** @type string */
    let content = await fs.readFile(file, { encoding: "utf8" });
    content = content.replaceAll(
      "arrayLabelCreate: Array | LabelCreate;",
      "arrayLabelCreate: Array<LabelCreate> | LabelCreate;"
    );
    content = content.replaceAll(
      "links?: { [key: string]: any | string; };",
      "_links?: { [key: string]: any | string; };"
    );
    await fs.writeFile(file, content);
  }
} catch (e) {
  console.error(e);
}
