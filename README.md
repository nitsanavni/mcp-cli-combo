# MCP-CLI Combo Example

Example project demonstrating dual interface pattern: exposing the same functionality via both MCP server and CLI.

## Architecture

- **Common logic module** (`src/greeter.ts`) - Core business logic
- **MCP server** (`src/mcp-server.ts`) - Exposes functionality as MCP tools
- **CLI** (`src/cli.ts`) - Exposes functionality as command-line interface
- **Router** (`index.ts`) - Dispatches to MCP or CLI mode

## Installation & Usage

### CLI Mode

Run directly from GitHub:
```bash
bunx github:nitsanavni/mcp-cli-combo cli Alice
bunx github:nitsanavni/mcp-cli-combo cli Alice --enthusiastic
```

Or clone locally:
```bash
git clone https://github.com/nitsanavni/mcp-cli-combo.git
cd mcp-cli-combo
bun run cli Alice --enthusiastic
```

### MCP Server Mode

**Note:** If updating to a new version, clear Bun's cache first:
```bash
bun pm cache rm
```

#### Claude Code CLI

Add to your MCP configuration:
```bash
claude mcp add -s user greeter bunx -- github:nitsanavni/mcp-cli-combo mcp
```

Or manually add to `~/.claude/settings.json`:
```json
{
  "mcpServers": {
    "greeter": {
      "command": "bunx",
      "args": ["github:nitsanavni/mcp-cli-combo", "mcp"]
    }
  }
}
```

#### Claude Desktop

Add to your Claude Desktop config:

**macOS/Linux**: `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "greeter": {
      "command": "bunx",
      "args": ["--bun", "github:nitsanavni/mcp-cli-combo", "mcp"]
    }
  }
}
```

## Available Tools/Commands

### greet

Greet someone by name with optional enthusiastic mode.

**MCP Tool:**
- `name` (string, required) - Name of the person to greet
- `enthusiastic` (boolean, optional) - Make greeting all caps

**CLI:**
```bash
bunx github:nitsanavni/mcp-cli-combo cli <name> [--enthusiastic]
```

## Development

Run locally:
```bash
# CLI mode
bun run cli Alice

# MCP server mode
bun run mcp
```
