const {
  Identifier,
  TSInterfaceDeclaration,
  ClassMethod,
} = require("jscodeshift");

const duplicateTypes = [
  "GetArticlesRequest",
  "DeletePropertyRequest",
  "GetPropertiesKeysRequest",
  "GetPropertyRequest",
  "SetPropertyRequest",
];

/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  file.source = require("./fix-jira-cloud-common-api.cjs")(file, api);
  const source = j(file.source);
  if (file.path.endsWith("apis/ServicedeskApi.ts")) {
    source
      .find(Identifier)
      .filter((path) => {
        if (!duplicateTypes.includes(path.node.name)) {
          return false;
        }
        if (TSInterfaceDeclaration.predicate(path.parent?.node)) {
          return true;
        }
        if (!ClassMethod.predicate(path.parent?.parent?.parent?.parent?.node)) {
          return false;
        }
        return (
          path.parent?.parent?.parent?.parent?.parent?.parent?.node.id.name ===
          "ServicedeskApi"
        );
      })
      .forEach((path) => {
        path.node.name = path.node.name.replace(
          /(.+)Request$/,
          "$1ServicedeskRequest",
        );
      });
  }
  return source.toSource();
};

module.exports = transformer;
