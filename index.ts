#!/usr/bin/env bun

const subcommand = process.argv[2];

if (subcommand === "cli") {
  await import("./src/cli.ts");
} else if (subcommand === "mcp") {
  await import("./src/mcp-server.ts");
} else {
  console.error("Usage: mcp-cli-combo <cli|mcp>");
  process.exit(1);
}
