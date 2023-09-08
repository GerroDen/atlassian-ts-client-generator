/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  const commonTransfer = require("./fix-jira-cloud-common-api.cjs");
  const transformed = commonTransfer(file, api);
  const source = j(transformed);
  source
    .find(j.ExportAllDeclaration)
    .filter((path) => path.node.source?.value === "./BoardsApi")
    .remove();
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
