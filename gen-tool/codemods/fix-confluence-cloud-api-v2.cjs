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
  source
    .find(j.TSPropertySignature)
    .filter((path) =>
      path.value?.leadingComments?.at(0)?.value?.includes("@deprecated"),
    )
    .filter((path) =>
      ["inlineMarkerRef", "inlineOriginalSelection"].includes(
        path.value.key.name,
      ),
    )
    .remove();
  return source.toSource();
};

module.exports = transformer;
