#!/usr/bin/env bun

/**
 * CLI - Exposes greeter as a command-line tool
 */

import { greet } from "./greeter.js";

// When called via router, "cli" is already consumed at index 2
// So we need to get args starting from index 3
const args = process.argv.slice(3);

if (args.length === 0) {
  console.error("Usage: mcp-cli-combo cli <name> [--enthusiastic]");
  process.exit(1);
}

const name = args[0];
const enthusiastic = args.includes("--enthusiastic");

const result = greet({ name, enthusiastic });
console.log(result);
