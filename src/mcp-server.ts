#!/usr/bin/env bun

/**
 * MCP Server - Exposes greeter as an MCP tool
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { greet } from "./greeter.js";

const server = new Server(
  {
    name: "greeter-mcp",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "greet",
        description: "Greet someone by name with an optional enthusiastic mode",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Name of the person to greet",
            },
            enthusiastic: {
              type: "boolean",
              description: "Make the greeting enthusiastic (all caps)",
              default: false,
            },
          },
          required: ["name"],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "greet") {
    const result = greet({
      name: args.name as string,
      enthusiastic: (args.enthusiastic as boolean) || false,
    });

    return {
      content: [
        {
          type: "text",
          text: result,
        },
      ],
    };
  }

  return {
    content: [
      {
        type: "text",
        text: `Unknown tool: ${name}`,
      },
    ],
  };
});

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
