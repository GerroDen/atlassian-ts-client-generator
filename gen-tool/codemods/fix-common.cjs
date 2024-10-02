/** @type {import("jscodeshift").Transform} */
const transformer = (file, { j }) => {
  const source = j(file.source);
  source
    .find(j.TSPropertySignature)
    .filter((path) => path.node.key?.name === "_configuration")
    .forEach((path) => {
      path.node.key.name = "configuration";
    });
  source
    .find(j.TSPropertySignature)
    .filter((path) => path.node.key?.name === "_default")
    .forEach((path) => {
      path.node.key.name = "default";
    });
  source
    .find(j.TSTypeReference)
    .filter((path) => path.node.typeName?.name === "Set")
    .forEach((path) => {
      path.node.typeName = j.identifier("Array");
    });
  return source.toSource();
};

module.exports = transformer;
