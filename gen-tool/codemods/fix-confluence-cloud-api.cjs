/** @type {import("jscodeshift").Transform} */
const transformer = (file, { j }) => {
  const source = j(file.source);
  source
    .find(j.TSPropertySignature)
    .filter((path) => path.value.key?.name === "links")
    .forEach((path) => (path.node.key.name = "_links"));
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
