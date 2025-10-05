# MCP-CLI Combo Example

Example project demonstrating dual interface pattern: exposing the same functionality via both MCP server and CLI.

## Architecture

- **Common logic module** (`src/greeter.ts`) - Core business logic
- **MCP server** (`src/mcp-server.ts`) - Exposes functionality as MCP tools
- **CLI** (`src/cli.ts`) - Exposes functionality as command-line interface
- **Router** (`index.ts`) - Dispatches to MCP or CLI mode

## Installation & Usage

**Note:** If updating to a new version, clear Bun's cache first:
```bash
bun pm cache rm
```

### CLI Mode

Run directly from GitHub:
```bash
bunx github:nitsanavni/mcp-cli-combo#main cli Alice
bunx github:nitsanavni/mcp-cli-combo#main cli Bob --enthusiastic
```

### MCP Server Mode

#### Claude Code CLI

Add to your MCP configuration:
```bash
claude mcp add -s user greeter bunx -- github:nitsanavni/mcp-cli-combo mcp
```

## Available Tools/Commands

### greet

Greet someone by name with optional enthusiastic mode.

**MCP Tool:**
- `name` (string, required) - Name of the person to greet
- `enthusiastic` (boolean, optional) - Make greeting all caps

**CLI:**
```bash
bunx github:nitsanavni/mcp-cli-combo#main cli <name> [--enthusiastic]
```
