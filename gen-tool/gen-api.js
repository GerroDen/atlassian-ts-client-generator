#!/usr/bin/env node
import execSh from "exec-sh";
import fs from "fs/promises";

const [, scriptName, dir] = process.argv;
if (!dir) {
  console.error(`dir is required: ${scriptName} <dir>`);
  process.exit(1);
}

const generator = "typescript-fetch";
const generatorParameter = additionalProperties({
  npmName: `${dir}`,
  usePromises: true,
  supportsES6: true,
  typescriptThreePlus: true,
  useSingleRequestParameter: true,
  withoutPrefixEnums: true,
  withoutRuntimeChecks: true,
});

await fs.rm(`generated-code/${dir}`, { recursive: true, force: true });
try {
  await execSh.promise(
    `npx @openapitools/openapi-generator-cli generate -i ${dir}/swagger.json -g ${generator} -o generated-code/${dir} -p ${generatorParameter} --skip-validate-spec`,
  );
  const fileContent = await fs.readFile(`generated-code/${dir}/package.json`, {
    encoding: "utf8",
  });
  const { name, version, description, author } = JSON.parse(
    fileContent.toString(),
  );
  const packageJson = {
    name,
    version: normalizeVersion(version),
    description,
    author,
    private: true,
    main: "src/index.ts",
  };
  await fs.writeFile(
    `generated-code/${dir}/package.json`,
    JSON.stringify(packageJson, null, 2) + "\n",
  );
} catch (e) {
  console.error("=======================");
  console.error("Error during run for", dir);
  if (e.stderr) {
    console.error(e.stderr);
  } else {
    console.error(e);
  }
  console.error("=======================");
}

/**
 * @param {object} properties
 */
function additionalProperties(properties) {
  return Object.entries(properties)
    .map(([key, value]) => key + "=" + value)
    .join(",");
}

function normalizeVersion(version) {
  if (/^\d+\.\d+$/.test(version)) {
    const newVersion = version + ".0";
    console.log(`Fixing ${dir} version ${version} -> ${newVersion}`);
    return newVersion;
  }
  const match = /^(\d+\.\d+\.\d+).+$/.exec(version);
  if (match) {
    const newVersion = match[1];
    console.log(`Fixing ${dir} version ${version} -> ${newVersion}`);
    return newVersion;
  }
  return version;
}
