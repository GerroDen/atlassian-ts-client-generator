#!/usr/bin/env node
import glob from "glob";
import { promises as fs } from "fs";

try {
  const files = glob.sync("generated-code/bitbucket-api/**/*.ts", {
    absolute: true,
  });
  for (let file of files) {
    /** @type string */
    let content = await fs.readFile(file, { encoding: "utf8" });
    content = content.replace(
      "async streamRaw(requestParameters: StreamRequest)",
      "async _streamRaw(requestParameters: StreamRequest)"
    );
    content = content.replace(
      "await this.streamRaw();",
      "await this._streamRaw();"
    );
    await fs.writeFile(file, content);
  }
} catch (e) {
  console.error(e);
}
