/**
 * Core greeter logic - shared between MCP and CLI
 */

export interface GreetOptions {
  name: string;
  enthusiastic?: boolean;
}

export function greet(options: GreetOptions): string {
  const greeting = `Hello, ${options.name}!`;
  return options.enthusiastic ? greeting.toUpperCase() : greeting;
}
