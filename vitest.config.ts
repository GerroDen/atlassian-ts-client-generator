import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    mockReset: true,
    unstubGlobals: true,
    unstubEnvs: true,
  },
});
