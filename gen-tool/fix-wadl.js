#!/usr/bin/env node
import path from "path";
import { promises as fs } from "fs";

const [, scriptName, dir] = process.argv;

if (!dir) {
  console.error(`dir is required: ${scriptName} <dir>`);
  process.exit(1);
}
const absDir = path.resolve(__dirname, "..", dir);

const fileContent = await fs.readFile(`${absDir}/swagger.json`, {
  encoding: "utf8",
});
let openApiSpec = JSON.parse(fileContent.toString());
openApiSpec.paths = Object.fromEntries(
  Object.entries(openApiSpec.paths).map(([path, spec]) => {
    path = repairPath(path);
    addMissingPathParameterSpecs({ path, spec });
    if (spec.get)
      addMissingGetQueryParameterSpecs({
        path,
        spec,
        queryParameter: "expand",
      });
    if (spec.post) addMissingBodyParameterSpecs({ path, spec });
    return [path, spec];
  })
);
openApiSpec = {
  ...openApiSpec,
  ...securitySpec(),
};
await fs.writeFile(
  `${absDir}/swagger.json`,
  JSON.stringify(openApiSpec, null, 2)
);

function repairPath(path) {
  const newPath = path
    .replace(/^\/api\/1\.0/, "")
    .replace(/{(\w+)\s+}/g, "{$1}");
  if (newPath !== path) {
    console.log("Replacing path", path, "->", newPath);
  }
  return newPath;
}

const pathParamPattern = /{(.*?)}/g;

function addMissingPathParameterSpecs({ path, spec }) {
  let pathParamMatches;
  const addingPathParameterSpecs = [];
  while ((pathParamMatches = pathParamPattern.exec(path)) !== null) {
    const pathParamName = pathParamMatches[1];
    if (!spec.parameters.find(isPathParameterSpec({ name: pathParamName }))) {
      const parameterSpec = pathParameterSpec({ name: pathParamName });
      console.log("Adding to", path, "parameter", parameterSpec);
      addingPathParameterSpecs.push(parameterSpec);
    }
  }
  spec.parameters.unshift(...addingPathParameterSpecs);
}

function addMissingGetQueryParameterSpecs({ path, spec, queryParameter }) {
  const addingGetQueryParameterSpecs = [];
  if (
    !spec.get.parameters ||
    !spec.get.parameters.find(isQueryParameterSpec({ name: queryParameter }))
  ) {
    const parameterSpec = queryParameterSpec({ name: queryParameter });
    console.log("Adding to", path, "query-parameter", parameterSpec);
    addingGetQueryParameterSpecs.push(parameterSpec);
  }
  if (!spec.get.parameters) {
    spec.get.parameters = [];
  }
  spec.get.parameters.push(...addingGetQueryParameterSpecs);
}

function addMissingBodyParameterSpecs({ path, spec }) {
  const addingPostParameterSpecs = [];
  if (
    !spec.post.parameters ||
    !spec.post.parameters.find(isBodyParameterSpec())
  ) {
    const parameterSpec = bodyParameterSpec();
    console.log("Adding to", path, "bodyparameter", parameterSpec);
    addingPostParameterSpecs.push(parameterSpec);
  }
  if (!spec.post.parameters) {
    spec.post.parameters = [];
  }
  spec.post.parameters.push(...addingPostParameterSpecs);
}

function pathParameterSpec({ name }) {
  return {
    type: "string",
    name: name,
    in: "path",
    required: true,
  };
}

function queryParameterSpec({ name }) {
  return {
    type: "string",
    name: name,
    in: "query",
    required: false,
  };
}

function bodyParameterSpec() {
  return {
    name: "body",
    in: "body",
    required: false,
    schema: {},
  };
}

function securitySpec() {
  return {
    securityDefinitions: {
      Bearer: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    security: [
      {
        Bearer: [],
      },
    ],
  };
}

function isPathParameterSpec({ name }) {
  return (parameterSpec) =>
    parameterSpec.in === "path" && parameterSpec.name === name;
}

function isQueryParameterSpec({ name }) {
  return (parameterSpec) =>
    parameterSpec.in === "query" && parameterSpec.name === name;
}

function isBodyParameterSpec() {
  return (parameterSpec) => parameterSpec.in === "body";
}
