const duplicateTypes = ["GetArticlesRequest", "DeletePropertyRequest", "GetPropertiesKeysRequest", "GetPropertyRequest", "SetPropertyRequest"];

/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  file.source = require("./fix-jira-cloud-common-api.cjs")(file, api);
  const source = j(file.source);
  if (file.path.endsWith("apis/PermissionSkippedApi.ts")) {
    source
      .find(j.Identifier)
      .filter((path) => path.node.name?.endsWith("Request"))
      .forEach((path) => {
        path.node.name = path.node.name.replace("Request", "PermissionSkippedRequest");
      });
    source
      .find(j.ClassDeclaration)
      .find(j.Identifier, { name: "DefaultApi" })
      .forEach((path) => {
        path.node.name = "PermissionSkippedApi";
      });
  }
  if (file.path.endsWith("apis/ServicedeskApi.ts")) {
    source
      .find(j.Identifier)
      .filter((path) => {
        if (!duplicateTypes.includes(path.node.name)) {
          return false;
        }
        if (j.TSInterfaceDeclaration.predicate(path.parent?.node)) {
          return true;
        }
        if (!j.ClassMethod.predicate(path.parent?.parent?.parent?.parent?.node)) {
          return false;
        }
        return path.parent?.parent?.parent?.parent?.parent?.parent?.node.id.name === "ServicedeskApi";
      })
      .forEach((path) => {
        path.node.name = path.node.name.replace(/(.+)Request$/, "$1ServicedeskRequest");
      });
  }
  return source.toSource();
};

module.exports = transformer;
