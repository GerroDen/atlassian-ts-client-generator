/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  file.source = require("./fix-jira-cloud-common-api.cjs")(file, api);
  const source = j(file.source);
  source
    .find(j.TSPropertySignature)
    .filter(
      (path) => path.parent?.parent?.node?.id?.name === "GetAllBoardsRequest",
    )
    .filter((path) => path.node.key?.name === "type")
    .forEach((path) => {
      path.node.typeAnnotation.typeAnnotation = j.tsUnionType([
        j.tsLiteralType(j.stringLiteral("scrum")),
        j.tsLiteralType(j.stringLiteral("kanban")),
        j.tsLiteralType(j.stringLiteral("simple")),
      ]);
    });
  return source.toSource();
};

module.exports = transformer;
