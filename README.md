Generates TypeScript clients for Atlassian products from OpenAPI specs and fixes typing issues.

# Usage

It is recommended to copy paste the whole tooling into your monorepo.
The use of the generated classes and typings is most comfortable via [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces), which are also avilable for [pnpm](https://pnpm.io/workspaces) and [yarn](https://yarnpkg.com/features/workspaces).

# Updating

Updates are possible on several levels:

- Update the OpenAPI generator in the `openapitools.json` with the [newest release](https://github.com/OpenAPITools/openapi-generator)
- Download the `swagger.json` files from Atlassian again with `npm run fetch`
- Update the URLs to the `swagger.json` files on Atlassian servers for newest rest API version. The URLs are documented from Atlassian: [Cloud](https://developer.atlassian.com/cloud/), [Server](https://developer.atlassian.com/server/).

All steps require to generate all files from the specs again with `npm run gen`.

# How it works

The `swagger.json` is used to generate TypeScript files via [OpenApi Generator CLI](https://github.com/OpenAPITools/openapi-generator-cli).
The generated code is then fixed against serious typing errors, which probably result from bad specs in the `swagger.json` files.
All fixes are made with [jscodeshift](https://github.com/facebook/jscodeshift).
All codemods are located in the `gen-tool` directory for each product separately.
Each product generates a separate subproject inside the `generated-code` directory and is type checked with `tsc`.
