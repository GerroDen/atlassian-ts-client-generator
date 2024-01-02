/** @type {import("jscodeshift").Transform} */
const transformer = (file, api) => {
  const { j } = api;
  file.source = require("./fix-common.cjs")(file, api);
  const source = j(file.source);
  source
    .find(j.ClassMethod)
    .filter((path) => path.node.key?.name === "streamRaw")
    .filter(
      (path) =>
        path.node.body?.body[0]?.expression?.argument?.callee?.property
          ?.name !== "streamRawRaw",
    )
    .forEach((path) => {
      path.node.key.name = "_streamRaw";
    });
  source
    .find(j.CallExpression)
    .filter((path) => path.node.callee?.type === "MemberExpression")
    .filter((path) => path.node.callee?.property?.name === "streamRaw")
    .forEach((path) => {
      path.node.callee.property.name = "_streamRaw";
    });
  if (!file.path?.endsWith("/models/index.ts")) {
    source
      .find(j.ExportNamedDeclaration)
      .filter(
        (path) => path.node.declaration?.type === "TSInterfaceDeclaration",
      )
      .filter((path) => path.node.declaration?.id?.name?.endsWith("Request"))
      .replaceWith((path) => path.node.declaration);
  }
  return source.toSource();
};

module.exports = transformer;
