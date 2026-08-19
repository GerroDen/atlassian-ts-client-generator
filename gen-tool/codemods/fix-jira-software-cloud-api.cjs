/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  file.source = require("./fix-jira-cloud-common-api.cjs")(file, api);
  const source = j(file.source);
  source
    .find(j.TSInterfaceDeclaration, { id: { name: "GetAllBoardsRequest" } })
    .find(j.TSPropertySignature, { key: { name: "type" } })
    .forEach((path) => {
      path.node.typeAnnotation.typeAnnotation = j.tsUnionType([
        j.tsLiteralType(j.stringLiteral("scrum")),
        j.tsLiteralType(j.stringLiteral("kanban")),
        j.tsLiteralType(j.stringLiteral("simple")),
      ]);
    });
  source
    .find(j.TSInterfaceDeclaration, { id: { name: "GetAllSprintsRequest" } })
    .find(j.TSPropertySignature, { key: { name: "state" } })
    .forEach((path) => {
      path.node.typeAnnotation.typeAnnotation = j.tsUnionType([
        j.tsLiteralType(j.stringLiteral("closed")),
        j.tsLiteralType(j.stringLiteral("active")),
        j.tsLiteralType(j.stringLiteral("future")),
      ]);
    });
  source
    .find(j.TSInterfaceDeclaration, { id: { name: "GetAllSprintsRequest" } })
    .find(j.TSPropertySignature, { key: { name: "state" } })
    .forEach((path) => {
      path.node.typeAnnotation.typeAnnotation = j.tsUnionType([
        j.tsLiteralType(j.stringLiteral("closed")),
        j.tsLiteralType(j.stringLiteral("active")),
        j.tsLiteralType(j.stringLiteral("future")),
      ]);
    });
  source
    .find(j.TSInterfaceDeclaration)
    .filter((path) => path.node?.id?.name?.endsWith("Request"))
    .find(j.TSPropertySignature, { key: { name: "fields" } })
    .find(j.TSTypeReference, { typeName: { name: "Array" } })
    .find(j.TSTypeParameterInstantiation)
    .find(j.TSObjectKeyword)
    .replaceWith(j.tsStringKeyword());
  return source.toSource();
};

module.exports = transformer;
