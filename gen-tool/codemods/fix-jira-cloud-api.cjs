/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  const commonTransfer = require("./fix-jira-cloud-common-api.cjs");
  const transformed = commonTransfer(file, api);
  const source = j(transformed);
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
  source
    .find(j.TSTypeReference)
    .filter((path) => path.node.typeName?.name === "StoreAvatarTypeEnum")
    .replaceWith(
      j.tsTypeReference(j.identifier("StoreAvatarOperationTypeEnum")),
    );
  return source.toSource();
};

module.exports = transformer;
