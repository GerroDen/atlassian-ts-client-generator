const reservedKeywords = ["_configuration", "_default", "_public"];

/** @type {import("jscodeshift").Transform} */
const transformer = (file, { j }) => {
  const source = j(file.source);
  source
    .find(j.TSPropertySignature)
    .filter((path) => reservedKeywords.includes(path.node.key?.name))
    .forEach((path) => {
      path.node.key.name = path.node.key.name.slice(1);
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
