/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  file.source = require("./fix-jira-cloud-common-api.cjs")(file, api);
  const source = j(file.source);
  source
    .find(j.TSInterfaceDeclaration)
    .filter((path) => path.node?.id?.name?.endsWith("Request"))
    .find(j.TSPropertySignature, { key: { name: "properties" } })
    .find(j.TSTypeReference, { typeName: { name: "Array" } })
    .find(j.TSTypeParameterInstantiation)
    .find(j.TSObjectKeyword)
    .replaceWith(j.tsStringKeyword());
  source
    .find(j.TSPropertySignature, { key: { name: "properties" } })
    .find(j.TSIndexSignature, { parameters: { 0: { name: "key" } } })
    .find(j.TSTypeReference, { typeName: { name: "JsonNode" } })
    .replaceWith(j.tsAnyKeyword());
  source
    .find(j.TSInterfaceDeclaration, { id: { name: "SearchProjectsRequest" } })
    .find(j.TSPropertySignature, { key: { name: "typeKey" } })
    .forEach((path) => {
      path.node.typeAnnotation.typeAnnotation = j.tsUnionType([
        j.tsLiteralType(j.stringLiteral("business")),
        j.tsLiteralType(j.stringLiteral("service_desk")),
        j.tsLiteralType(j.stringLiteral("software")),
      ]);
    });
  source
    .find(j.TSInterfaceDeclaration)
    .filter((path) =>
      ["FieldIdentifierObject", "AssociationContextObject"].includes(path.node.id.name),
    )
    .find(j.TSPropertySignature, { key: { name: "identifier" } })
    .find(j.TSTypeAnnotation)
    .find(j.TSObjectKeyword)
    .replaceWith(j.tsUnknownKeyword());
  if (file.path?.endsWith("apis/IssueFieldsApi.ts")) {
    source
      .find(j.Identifier, { name: "CreateCustomFieldRequest" })
      .replaceWith(j.identifier("ICreateCustomFieldRequest"));
  }
  return source.toSource();
};

module.exports = transformer;
