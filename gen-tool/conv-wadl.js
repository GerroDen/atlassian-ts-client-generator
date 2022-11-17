#!/usr/bin/env node
import execSh from "exec-sh";

const [, scriptName, dir] = process.argv;

if (!dir) {
  console.error(`dir is required: ${scriptName} <dir>`);
  process.exit(1);
}

try {
  await execSh.promise(
    `npx api-spec-converter --from=wadl --to=swagger_2 ${dir}/application.wadl > ${dir}/swagger.json`
  );
} catch (e) {
  console.error(e.stderr);
}
