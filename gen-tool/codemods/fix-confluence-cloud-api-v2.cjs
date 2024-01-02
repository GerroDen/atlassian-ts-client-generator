/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  file.source = require("./fix-common.cjs")(file, api);
  const source = j(file.source);
  source
    .find(j.ObjectProperty)
    .filter((path) => path.value.value?.value?.startsWith("-"))
    .forEach((path) => {
      path.node.key.name += "Desc";
    });
  return source.toSource();
};

module.exports = transformer;
