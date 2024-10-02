/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  file.source = require("./fix-common.cjs")(file, api);
  const source = j(file.source);
  source
    .find(j.ObjectProperty)
    .filter((path) => path.node.value?.value?.startsWith("+"))
    .forEach((path) => {
      path.node.key.name += "Asc";
    });
  source
    .find(j.ObjectProperty)
    .filter((path) => path.node.value?.value?.startsWith("-"))
    .forEach((path) => {
      path.node.key.name += "Desc";
    });
  source
    .find(j.TSPropertySignature)
    .filter((path) => path.node.key?.name?.match(/^_\d/))
    .forEach((path) => {
      const value = path.node.key.name.substring(1);
      path.node.key.name = `["${value}"]`;
    });
  return source.toSource();
};

module.exports = transformer;
