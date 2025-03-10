const { Identifier } = require("jscodeshift");
/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  file.source = require("./fix-common.cjs")(file, api);
  file.source = require("./fix-jira-cloud-common-api.cjs")(file, api);
  const source = j(file.source);
  source
    .find(j.TSPropertySignature)
    .filter((path) => path.node.key?.name?.match("properties"))
    .filter((path) => path.parent?.parent.node?.id?.name?.endsWith("Request"))
    .forEach((path) => {
      path.node.typeAnnotation.typeAnnotation.typeParameters.params[0] =
        j.tsStringKeyword();
    });
  source
    .find(j.TSPropertySignature)
    .filter((path) => path.node.key?.name?.match("properties"))
    .filter((path) => {
      const member = path.node.typeAnnotation?.typeAnnotation?.members?.[0];
      const parameter = member?.parameters?.[0];
      return (
        parameter?.name === "key" &&
        parameter?.typeAnnotation?.typeAnnotation?.type === "TSStringKeyword" &&
        member?.typeAnnotation?.typeAnnotation?.typeName?.name === "JsonNode"
      );
    })
    .forEach((path) => {
      path.node.typeAnnotation.typeAnnotation.members[0].typeAnnotation.typeAnnotation =
        j.tsAnyKeyword();
    });
  source
    .find(j.TSPropertySignature)
    .filter(
      (path) => path.parent?.parent?.node?.id?.name === "SearchProjectsRequest",
    )
    .filter((path) => path.node.key?.name === "typeKey")
    .forEach((path) => {
      path.node.typeAnnotation.typeAnnotation = j.tsUnionType([
        j.tsLiteralType(j.stringLiteral("business")),
        j.tsLiteralType(j.stringLiteral("service_desk")),
        j.tsLiteralType(j.stringLiteral("software")),
      ]);
    });
  if (file.path?.endsWith("apis/IssueFieldsApi.ts")) {
    source
      .find(j.Identifier)
      .filter((node) => node.value.name === "CreateCustomFieldRequest")
      .replaceWith(j.identifier("ICreateCustomFieldRequest"));
  }
  return source.toSource();
};

module.exports = transformer;
