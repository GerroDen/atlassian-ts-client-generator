/** @type {import("jscodeshift").Transform} */
const transformer = (file, { j }) => {
  const source = j(file.source);
  source
    .find(j.ClassMethod)
    .filter((path) => path.value?.key?.name === "streamRaw")
    .filter(
      (path) =>
        path.value?.body?.body[0]?.expression?.argument?.callee?.property
          ?.name !== "streamRawRaw",
    )
    .forEach((path) => {
      path.value.key.name = "_streamRaw";
    });
  source
    .find(j.CallExpression)
    .filter((path) => path.value?.callee?.type === "MemberExpression")
    .filter((path) => path.value?.callee?.property?.name === "streamRaw")
    .forEach((path) => {
      path.value.callee.property.name = "_streamRaw";
    });
  return source.toSource();
};

module.exports = transformer;
