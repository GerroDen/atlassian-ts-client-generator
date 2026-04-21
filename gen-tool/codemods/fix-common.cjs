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
  source
    .find(j.ExportNamedDeclaration)
    .filter((path) => path.node.declaration.id?.name === "FetchAPI")
    .replaceWith(
      j.exportNamedDeclaration(
        j.tsTypeAliasDeclaration(
          j.identifier("FetchAPI"),
          j.tsTypeQuery(j.tsQualifiedName(j.identifier("globalThis"), j.identifier("fetch"))),
        ),
      ),
    )
    .insertAfter(
      j.exportNamedDeclaration(
        j.tsTypeAliasDeclaration(
          j.identifier("RequestCredentials"),
          j.tsUnionType([
            j.tsLiteralType(j.stringLiteral("omit")),
            j.tsLiteralType(j.stringLiteral("include")),
            j.tsLiteralType(j.stringLiteral("same-origin")),
          ]),
        ),
      ),
    );
  source
    .find(j.ClassDeclaration)
    .filter((path) => path.node.id.name === "BaseAPI")
    .find(j.ClassProperty)
    .filter((path) => path.node.key.name === "fetchApi")
    .find(j.ArrowFunctionExpression)
    .forEach((path) => {
      path.node.params[1].optional = true;
    });
  source
    .find(j.TSInterfaceDeclaration)
    .filter((path) =>
      ["RequestContext", "ResponseContext", "ErrorContext"].includes(path.node.id.name),
    )
    .find(j.TSPropertySignature)
    .filter((path) => path.node.key.name === "init")
    .forEach((path) => {
      path.node.optional = true;
    });
  return source.toSource();
};

module.exports = transformer;
