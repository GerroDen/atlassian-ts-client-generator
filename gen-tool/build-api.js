#!/usr/bin/env node
import execSh from "exec-sh";

const [, scriptName, dir] = process.argv;

if (!dir) {
  console.error(`dir is required: ${scriptName} <dir>`);
  process.exit(1);
}

try {
  await execSh.promise(`npm ci`, { cwd: `${dir}/generated-code` });
  await execSh.promise(`npm run build --prefix ${dir}/generated-code`);
} catch (e) {
  console.error("=======================");
  console.error("Error during run for", dir);
  console.error(e.stderr);
  console.error("=======================");
}
