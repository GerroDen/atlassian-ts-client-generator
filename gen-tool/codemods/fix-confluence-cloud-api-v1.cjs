/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  file.source = require("./fix-common.cjs")(file, api);
  const source = j(file.source);
  source
    .find(j.TSPropertySignature)
    .filter((path) => path.value.key?.name === "links")
    .filter(
      (path) =>
        path.value.typeAnnotation?.typeAnnotation?.members?.[0]?.typeAnnotation
          ?.typeAnnotation?.typeName?.name === "GenericLinksValue",
    )
    .forEach((path) => {
      path.node.key.name = "_links";
    });
  source
    .find(j.TSTypeReference)
    .filter(
      (path) =>
        path.value.typeName?.name === "BulkRemoveContentStatesStatusEnum",
    )
    .replaceWith(
      j.tsTypeReference(
        j.identifier("BulkRemoveContentStatesOperationStatusEnum"),
      ),
    );
  return source.toSource();
};

module.exports = transformer;
