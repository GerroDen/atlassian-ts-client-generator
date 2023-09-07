/** @type {import("jscodeshift").Transform} */
const transformer = (file, { j }) => {
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
