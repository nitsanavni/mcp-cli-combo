#!/usr/bin/env bun

/**
 * CLI - Exposes greeter as a command-line tool
 */

import { greet } from "./greeter.js";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Usage: greeter-cli <name> [--enthusiastic]");
  process.exit(1);
}

const name = args[0];
const enthusiastic = args.includes("--enthusiastic");

const result = greet({ name, enthusiastic });
console.log(result);
