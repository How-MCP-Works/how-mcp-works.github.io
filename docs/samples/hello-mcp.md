# Hello MCP - Your First Server

Build your first MCP server in 5 minutes! This tutorial creates a simple server that demonstrates core MCP concepts.

## What You'll Learn

- 🏗️ Basic MCP server structure
- 🔧 How to define and expose tools
- 📡 Client-server communication
- 🧪 Testing your implementation

## What You'll Build

A "Hello World" MCP server that:
- Responds to greetings in different languages
- Performs simple calculations
- Demonstrates error handling

## Prerequisites

- Python 3.8+ or Node.js 16+
- Basic command line knowledge
- 5 minutes of your time

## Step-by-Step Guide

### Step 1: Set Up Your Project

=== "Python"
    ```bash
    # Create project directory
    mkdir hello-mcp && cd hello-mcp
    
    # Create virtual environment
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    
    # Install MCP SDK
    pip install mcp
    ```

=== "TypeScript"
    ```bash
    # Create project directory
    mkdir hello-mcp && cd hello-mcp
    
    # Initialize package.json
    npm init -y
    
    # Install MCP SDK
    npm install @modelcontextprotocol/sdk
    npm install -D typescript @types/node
    
    # Create tsconfig.json
    npx tsc --init
    ```

### Step 2: Create Your Server

=== "Python"
    Create `server.py`:
    
    ```python
    from mcp.server import Server, NotificationOptions
    from mcp.server.models import InitializationOptions
    import mcp.server.stdio
    import mcp.types as types
    
    # Create a server instance
    server = Server("hello-mcp")
    
    @server.list_tools()
    async def handle_list_tools() -> list[types.Tool]:
        """List available tools."""
        return [
            types.Tool(
                name="say_hello",
                description="Say hello in different languages",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "Name to greet"
                        },
                        "language": {
                            "type": "string",
                            "enum": ["english", "spanish", "french", "japanese"],
                            "description": "Language for greeting"
                        }
                    },
                    "required": ["name"]
                }
            ),
            types.Tool(
                name="calculate",
                description="Perform basic arithmetic",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "operation": {
                            "type": "string",
                            "enum": ["add", "subtract", "multiply", "divide"],
                            "description": "Math operation"
                        },
                        "a": {
                            "type": "number",
                            "description": "First number"
                        },
                        "b": {
                            "type": "number",
                            "description": "Second number"
                        }
                    },
                    "required": ["operation", "a", "b"]
                }
            )
        ]
    
    @server.call_tool()
    async def handle_call_tool(
        name: str, arguments: dict | None
    ) -> list[types.TextContent | types.ImageContent | types.EmbeddedResource]:
        """Execute a tool and return results."""
        
        if name == "say_hello":
            user_name = arguments.get("name", "friend")
            language = arguments.get("language", "english")
            
            greetings = {
                "english": f"Hello, {user_name}!",
                "spanish": f"¡Hola, {user_name}!",
                "french": f"Bonjour, {user_name}!",
                "japanese": f"こんにちは、{user_name}さん!"
            }
            
            return [types.TextContent(
                type="text",
                text=greetings.get(language, greetings["english"])
            )]
        
        elif name == "calculate":
            operation = arguments.get("operation")
            a = arguments.get("a", 0)
            b = arguments.get("b", 0)
            
            if operation == "add":
                result = a + b
            elif operation == "subtract":
                result = a - b
            elif operation == "multiply":
                result = a * b
            elif operation == "divide":
                if b == 0:
                    raise ValueError("Division by zero!")
                result = a / b
            else:
                raise ValueError(f"Unknown operation: {operation}")
            
            return [types.TextContent(
                type="text",
                text=f"Result: {result}"
            )]
        
        else:
            raise ValueError(f"Unknown tool: {name}")
    
    async def run():
        """Run the MCP server."""
        async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
            await server.run(
                read_stream,
                write_stream,
                InitializationOptions(
                    server_name="hello-mcp",
                    server_version="0.1.0",
                    capabilities=server.get_capabilities(
                        notification_options=NotificationOptions(),
                        experimental_capabilities={},
                    ),
                ),
            )
    
    if __name__ == "__main__":
        import asyncio
        asyncio.run(run())
    ```

=== "TypeScript"
    Create `server.ts`:
    
    ```typescript
    import { Server } from "@modelcontextprotocol/sdk/server/index.js";
    import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
    import {
      ListToolsRequestSchema,
      CallToolRequestSchema,
      Tool,
      TextContent,
    } from "@modelcontextprotocol/sdk/types.js";
    
    // Create server instance
    const server = new Server(
      {
        name: "hello-mcp",
        version: "0.1.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );
    
    // Define available tools
    server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: "say_hello",
            description: "Say hello in different languages",
            inputSchema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  description: "Name to greet",
                },
                language: {
                  type: "string",
                  enum: ["english", "spanish", "french", "japanese"],
                  description: "Language for greeting",
                },
              },
              required: ["name"],
            },
          },
          {
            name: "calculate",
            description: "Perform basic arithmetic",
            inputSchema: {
              type: "object",
              properties: {
                operation: {
                  type: "string",
                  enum: ["add", "subtract", "multiply", "divide"],
                  description: "Math operation",
                },
                a: {
                  type: "number",
                  description: "First number",
                },
                b: {
                  type: "number",
                  description: "Second number",
                },
              },
              required: ["operation", "a", "b"],
            },
          },
        ] satisfies Tool[],
      };
    });
    
    // Handle tool execution
    server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;
    
      if (name === "say_hello") {
        const userName = args?.name || "friend";
        const language = args?.language || "english";
    
        const greetings: Record<string, string> = {
          english: `Hello, ${userName}!`,
          spanish: `¡Hola, ${userName}!`,
          french: `Bonjour, ${userName}!`,
          japanese: `こんにちは、${userName}さん!`,
        };
    
        return {
          content: [
            {
              type: "text",
              text: greetings[language] || greetings.english,
            } as TextContent,
          ],
        };
      }
    
      if (name === "calculate") {
        const operation = args?.operation;
        const a = Number(args?.a) || 0;
        const b = Number(args?.b) || 0;
    
        let result: number;
        switch (operation) {
          case "add":
            result = a + b;
            break;
          case "subtract":
            result = a - b;
            break;
          case "multiply":
            result = a * b;
            break;
          case "divide":
            if (b === 0) throw new Error("Division by zero!");
            result = a / b;
            break;
          default:
            throw new Error(`Unknown operation: ${operation}`);
        }
    
        return {
          content: [
            {
              type: "text",
              text: `Result: ${result}`,
            } as TextContent,
          ],
        };
      }
    
      throw new Error(`Unknown tool: ${name}`);
    });
    
    // Start the server
    async function main() {
      const transport = new StdioServerTransport();
      await server.connect(transport);
      console.error("Hello MCP server running on stdio");
    }
    
    main().catch(console.error);
    ```

### Step 3: Test Your Server

=== "Python"
    Create `test_client.py`:
    
    ```python
    import asyncio
    from mcp import ClientSession, StdioServerParameters
    from mcp.client.stdio import stdio_client
    
    async def test_server():
        """Test the Hello MCP server."""
        server_params = StdioServerParameters(
            command="python",
            args=["server.py"]
        )
        
        async with stdio_client(server_params) as (read, write):
            async with ClientSession(read, write) as session:
                # Initialize connection
                await session.initialize()
                
                # List available tools
                tools = await session.list_tools()
                print("Available tools:")
                for tool in tools:
                    print(f"  - {tool.name}: {tool.description}")
                
                # Test say_hello
                print("\nTesting say_hello:")
                result = await session.call_tool(
                    "say_hello",
                    arguments={"name": "World", "language": "spanish"}
                )
                print(f"  Result: {result.content[0].text}")
                
                # Test calculate
                print("\nTesting calculate:")
                result = await session.call_tool(
                    "calculate",
                    arguments={"operation": "multiply", "a": 7, "b": 6}
                )
                print(f"  Result: {result.content[0].text}")
    
    if __name__ == "__main__":
        asyncio.run(test_server())
    ```
    
    Run the test:
    ```bash
    python test_client.py
    ```

=== "TypeScript"
    Create `test_client.ts`:
    
    ```typescript
    import { Client } from "@modelcontextprotocol/sdk/client/index.js";
    import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
    
    async function testServer() {
      const transport = new StdioClientTransport({
        command: "node",
        args: ["server.js"],
      });
    
      const client = new Client(
        {
          name: "test-client",
          version: "1.0.0",
        },
        {
          capabilities: {},
        }
      );
    
      await client.connect(transport);
    
      // List available tools
      const tools = await client.listTools();
      console.log("Available tools:");
      tools.tools.forEach((tool) => {
        console.log(`  - ${tool.name}: ${tool.description}`);
      });
    
      // Test say_hello
      console.log("\nTesting say_hello:");
      const helloResult = await client.callTool({
        name: "say_hello",
        arguments: { name: "World", language: "spanish" },
      });
      console.log(`  Result: ${helloResult.content[0].text}`);
    
      // Test calculate
      console.log("\nTesting calculate:");
      const calcResult = await client.callTool({
        name: "calculate",
        arguments: { operation: "multiply", a: 7, b: 6 },
      });
      console.log(`  Result: ${calcResult.content[0].text}`);
    
      await client.close();
    }
    
    testServer().catch(console.error);
    ```
    
    Compile and run:
    ```bash
    npx tsc
    node test_client.js
    ```

### Expected Output

```
Available tools:
  - say_hello: Say hello in different languages
  - calculate: Perform basic arithmetic

Testing say_hello:
  Result: ¡Hola, World!

Testing calculate:
  Result: Result: 42
```

## Understanding the Code

### Server Structure

1. **Import MCP SDK** - Core functionality
2. **Create Server Instance** - Named "hello-mcp"
3. **Define Tools** - Using decorators/handlers
4. **Implement Tool Logic** - Process requests
5. **Start Server** - Listen on stdio transport

### Key Concepts Demonstrated

#### Tool Definition
Tools are defined with:
- **Name**: Unique identifier
- **Description**: Human-readable purpose
- **Input Schema**: JSON Schema for validation

#### Error Handling
The server handles errors gracefully:
- Invalid tool names
- Missing parameters  
- Division by zero

#### Content Types
MCP supports multiple content types. This example uses `TextContent`, but you can also return:
- `ImageContent` - Images
- `EmbeddedResource` - Files or data

## Extending Your Server

Try these modifications:

### 1. Add More Languages
```python
greetings = {
    "english": f"Hello, {user_name}!",
    "spanish": f"¡Hola, {user_name}!",
    "french": f"Bonjour, {user_name}!",
    "japanese": f"こんにちは、{user_name}さん!",
    "german": f"Hallo, {user_name}!",
    "italian": f"Ciao, {user_name}!",
}
```

### 2. Add New Tools
```python
@server.list_tools()
async def handle_list_tools():
    return existing_tools + [
        types.Tool(
            name="get_time",
            description="Get current time in different timezones",
            inputSchema={
                "type": "object",
                "properties": {
                    "timezone": {
                        "type": "string",
                        "description": "Timezone (e.g., 'UTC', 'EST')"
                    }
                }
            }
        )
    ]
```

### 3. Add Resources
```python
@server.list_resources()
async def handle_list_resources():
    return [
        types.Resource(
            uri="memory://greetings",
            name="Greeting History",
            description="History of greetings sent"
        )
    ]
```

## Common Issues

### "Command not found"
- Ensure Python/Node is in your PATH
- Check virtual environment is activated

### "Module not found"
- Install the MCP SDK: `pip install mcp`
- Check you're in the correct directory

### "Connection refused"
- Ensure server is running
- Check for port conflicts

## Next Steps

Congratulations! You've built your first MCP server. Here's what to explore next:

1. **[Database Connector](/samples/database-connector/)** - Work with real data
2. **[Implementation Guide](/impl/servers/)** - Production best practices
3. **[API Reference](/spec/message-types/)** - Deep dive into the protocol

## Run This Tutorial Online

Don't want to install anything? Try it in your browser:

<div style="margin: 2rem 0;">
  <a href="https://replit.com/@mcp/hello-mcp-tutorial" class="md-button md-button--primary" style="margin-right: 1rem;">
    🚀 Run on Replit
  </a>
  <a href="https://github.com/How-MCP-Works/hello-mcp" class="md-button">
    📦 View on GitHub
  </a>
</div>

!!! success "What You Accomplished"
    - ✅ Built a working MCP server
    - ✅ Defined and implemented tools
    - ✅ Tested with a client
    - ✅ Understood core MCP concepts

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Build Your First MCP Server",
  "description": "Step-by-step tutorial for creating a Hello World MCP server",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Set up project",
      "text": "Create project directory and install MCP SDK"
    },
    {
      "@type": "HowToStep", 
      "name": "Create server",
      "text": "Implement server with tools"
    },
    {
      "@type": "HowToStep",
      "name": "Test implementation",
      "text": "Run test client to verify functionality"
    }
  ]
}
</script>