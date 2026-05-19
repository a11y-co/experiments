#!/usr/bin/env node

const { spawnSync } = require("child_process");

const reactScripts = require.resolve("react-scripts/bin/react-scripts.js");

const env = { ...process.env };
const nodeMajor = Number(process.versions.node.split(".")[0]);

if (nodeMajor >= 17) {
  const legacyProvider = "--openssl-legacy-provider";
  env.NODE_OPTIONS = env.NODE_OPTIONS
    ? `${env.NODE_OPTIONS} ${legacyProvider}`
    : legacyProvider;
}

const result = spawnSync(process.execPath, [reactScripts, ...process.argv.slice(2)], {
  env,
  stdio: "inherit",
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status === null ? 1 : result.status);
