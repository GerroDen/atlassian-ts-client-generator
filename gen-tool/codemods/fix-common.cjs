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
  return source.toSource();
};

module.exports = transformer;
