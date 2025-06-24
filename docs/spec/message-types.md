# Message Types Reference

Complete specification of all MCP message types, request/response formats, and protocol semantics.

## Message Categories

The Model Context Protocol defines messages in several categories:

<div class="message-categories" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  
  <div class="category-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border-left: 4px solid var(--md-primary-fg-color);">
    <h3>🔄 Lifecycle Messages</h3>
    <p>Connection management, initialization, and shutdown procedures</p>
    <ul>
      <li><code>initialize</code></li>
      <li><code>initialized</code></li>
      <li><code>shutdown</code></li>
      <li><code>exit</code></li>
    </ul>
  </div>
  
  <div class="category-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border-left: 4px solid var(--md-accent-fg-color);">
    <h3>🔧 Tool Messages</h3>
    <p>Tool discovery, execution, and management operations</p>
    <ul>
      <li><code>tools/list</code></li>
      <li><code>tools/call</code></li>
      <li><code>tools/list-changed</code></li>
    </ul>
  </div>
  
  <div class="category-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border-left: 4px solid var(--md-primary-fg-color);">
    <h3>📁 Resource Messages</h3>
    <p>Data access, subscription, and resource management</p>
    <ul>
      <li><code>resources/list</code></li>
      <li><code>resources/read</code></li>
      <li><code>resources/subscribe</code></li>
      <li><code>resources/unsubscribe</code></li>
      <li><code>resources/updated</code></li>
    </ul>
  </div>
  
  <div class="category-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border-left: 4px solid var(--md-accent-fg-color);">
    <h3>💬 Prompt Messages</h3>
    <p>Template management and prompt operations</p>
    <ul>
      <li><code>prompts/list</code></li>
      <li><code>prompts/get</code></li>
      <li><code>prompts/list-changed</code></li>
    </ul>
  </div>
  
</div>

## Base Message Format

All MCP messages follow JSON-RPC 2.0 specification:

### Request Format

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-identifier",
  "method": "namespace/operation",
  "params": {
    // Method-specific parameters
  }
}
```

### Response Format

```json
{
  "jsonrpc": "2.0", 
  "id": "unique-request-identifier",
  "result": {
    // Method-specific result
  }
}
```

### Error Format

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-identifier", 
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": {
      // Additional error information
    }
  }
}
```

### Notification Format

```json
{
  "jsonrpc": "2.0",
  "method": "namespace/notification",
  "params": {
    // Notification parameters
  }
}
```

## Lifecycle Messages

### Initialize Request

Establishes connection and negotiates capabilities:

```json
{
  "method": "initialize",
  "params": {
    "protocolVersion": "1.0.0",
    "capabilities": {
      "tools": true,
      "resources": {
        "subscribe": true,
        "listChanged": true
      },
      "prompts": {
        "listChanged": true
      },
      "experimental": {
        "sampling": true
      }
    },
    "clientInfo": {
      "name": "My AI Assistant",
      "version": "2.1.0"
    }
  }
}
```

### Initialize Response

```json
{
  "result": {
    "protocolVersion": "1.0.0",
    "capabilities": {
      "tools": {
        "listChanged": true
      },
      "resources": {
        "subscribe": true,
        "listChanged": true
      },
      "experimental": {}
    },
    "serverInfo": {
      "name": "Database MCP Server",
      "version": "1.5.2"
    }
  }
}
```

### Initialized Notification

Confirms initialization complete:

```json
{
  "method": "initialized",
  "params": {}
}
```

### Shutdown Request

Initiates graceful shutdown:

```json
{
  "method": "shutdown",
  "params": {}
}
```

### Exit Notification

Forces immediate termination:

```json
{
  "method": "exit",
  "params": {}
}
```

## Tool Messages

### Tools List Request

Discovers available tools:

```json
{
  "method": "tools/list",
  "params": {
    "cursor": "optional-pagination-cursor"
  }
}
```

### Tools List Response

```json
{
  "result": {
    "tools": [
      {
        "name": "query_database",
        "description": "Execute SQL queries against the database",
        "inputSchema": {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "description": "SQL query to execute",
              "maxLength": 10000
            },
            "database": {
              "type": "string",
              "enum": ["production", "staging", "analytics"],
              "description": "Target database"
            },
            "parameters": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "Query parameters for prepared statements"
            }
          },
          "required": ["query"],
          "additionalProperties": false
        }
      }
    ],
    "nextCursor": "optional-next-page-cursor"
  }
}
```

### Tool Call Request

Executes a specific tool:

```json
{
  "method": "tools/call",
  "params": {
    "name": "query_database",
    "arguments": {
      "query": "SELECT * FROM users WHERE created_at > ?",
      "database": "production", 
      "parameters": ["2024-01-01"]
    }
  }
}
```

### Tool Call Response

```json
{
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Query executed successfully. Found 1,234 users created after 2024-01-01."
      },
      {
        "type": "resource",
        "resource": {
          "uri": "memory://query-results/abc123",
          "name": "Query Results",
          "mimeType": "application/json"
        }
      }
    ],
    "isError": false
  }
}
```

### Tool List Changed Notification

Notifies when available tools change:

```json
{
  "method": "tools/list-changed",
  "params": {}
}
```

## Resource Messages

### Resources List Request

Discovers available resources:

```json
{
  "method": "resources/list",
  "params": {
    "cursor": "optional-pagination-cursor"
  }
}
```

### Resources List Response

```json
{
  "result": {
    "resources": [
      {
        "uri": "file:///var/log/app.log",
        "name": "Application Log",
        "description": "Real-time application log file",
        "mimeType": "text/plain"
      },
      {
        "uri": "database://users/table",
        "name": "Users Table",
        "description": "User account information",
        "mimeType": "application/json"
      }
    ],
    "nextCursor": "optional-next-page-cursor"
  }
}
```

### Resource Read Request

Accesses resource content:

```json
{
  "method": "resources/read",
  "params": {
    "uri": "file:///var/log/app.log"
  }
}
```

### Resource Read Response

```json
{
  "result": {
    "contents": [
      {
        "uri": "file:///var/log/app.log",
        "mimeType": "text/plain",
        "text": "2024-06-24 10:30:15 INFO Application started\n2024-06-24 10:30:16 INFO Database connection established"
      }
    ]
  }
}
```

### Resource Subscribe Request

Subscribes to resource changes:

```json
{
  "method": "resources/subscribe",
  "params": {
    "uri": "file:///var/log/app.log"
  }
}
```

### Resource Updated Notification

Notifies of resource changes:

```json
{
  "method": "resources/updated", 
  "params": {
    "uri": "file:///var/log/app.log"
  }
}
```

## Prompt Messages

### Prompts List Request

Discovers available prompts:

```json
{
  "method": "prompts/list",
  "params": {
    "cursor": "optional-pagination-cursor"
  }
}
```

### Prompts List Response

```json
{
  "result": {
    "prompts": [
      {
        "name": "analyze_data",
        "description": "Analyze dataset and provide insights",
        "arguments": [
          {
            "name": "dataset",
            "description": "Dataset to analyze",
            "required": true
          },
          {
            "name": "metrics",
            "description": "Specific metrics to focus on",
            "required": false
          }
        ]
      }
    ],
    "nextCursor": "optional-next-page-cursor"
  }
}
```

### Prompt Get Request

Retrieves a specific prompt:

```json
{
  "method": "prompts/get",
  "params": {
    "name": "analyze_data",
    "arguments": {
      "dataset": "sales_data_2024",
      "metrics": "revenue,growth,churn"
    }
  }
}
```

### Prompt Get Response

```json
{
  "result": {
    "description": "Analysis prompt for sales data",
    "messages": [
      {
        "role": "user",
        "content": {
          "type": "text",
          "text": "Please analyze the sales_data_2024 dataset focusing on revenue, growth, and churn metrics. Provide insights and recommendations."
        }
      }
    ]
  }
}
```

## Error Codes

Standard JSON-RPC 2.0 error codes plus MCP-specific extensions:

| Code | Name | Description |
|------|------|-------------|
| **-32700** | Parse Error | Invalid JSON received |
| **-32600** | Invalid Request | JSON-RPC format error |
| **-32601** | Method Not Found | Method doesn't exist |
| **-32602** | Invalid Params | Invalid parameters |
| **-32603** | Internal Error | Server internal error |
| **-32000** | Tool Not Found | Requested tool doesn't exist |
| **-32001** | Tool Execution Error | Tool failed to execute |
| **-32002** | Resource Not Found | Requested resource doesn't exist |
| **-32003** | Resource Access Denied | Insufficient permissions |
| **-32004** | Prompt Not Found | Requested prompt doesn't exist |
| **-32005** | Rate Limited | Too many requests |

## Content Types

MCP supports multiple content types in responses:

### Text Content

```json
{
  "type": "text",
  "text": "Plain text response"
}
```

### Image Content

```json
{
  "type": "image",
  "data": "base64-encoded-image-data",
  "mimeType": "image/png"
}
```

### Resource Reference

```json
{
  "type": "resource",
  "resource": {
    "uri": "file:///path/to/file.json",
    "name": "Data File",
    "mimeType": "application/json"
  }
}
```

## Capability Negotiation

Capabilities are negotiated during initialization:

### Client Capabilities

```json
{
  "capabilities": {
    "tools": true,
    "resources": {
      "subscribe": true,
      "listChanged": true
    },
    "prompts": true,
    "sampling": true,
    "experimental": {
      "streaming": true
    }
  }
}
```

### Server Capabilities

```json
{
  "capabilities": {
    "tools": {
      "listChanged": true
    },
    "resources": {
      "subscribe": true,
      "listChanged": true
    },
    "prompts": {
      "listChanged": true
    },
    "experimental": {}
  }
}
```

## Pagination

For large result sets, MCP supports cursor-based pagination:

### Request with Cursor

```json
{
  "method": "tools/list",
  "params": {
    "cursor": "eyJvZmZzZXQiOjEwMCwibGltaXQiOjUwfQ=="
  }
}
```

### Response with Next Cursor

```json
{
  "result": {
    "tools": [...],
    "nextCursor": "eyJvZmZzZXQiOjE1MCwibGltaXQiOjUwfQ=="
  }
}
```

## Validation Requirements

All MCP implementations must:

1. **JSON-RPC 2.0 Compliance** - Strict adherence to specification
2. **Schema Validation** - Validate all parameters against schemas
3. **Error Handling** - Return appropriate error codes
4. **Capability Respect** - Only use negotiated capabilities
5. **ID Matching** - Match response IDs to request IDs
6. **Timeout Handling** - Implement reasonable timeouts

Ready to implement? Check our [Conformance Tests →](/spec/conformance-tests/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "MCP Message Types Reference - Complete Protocol Specification",
  "description": "Comprehensive reference for Model Context Protocol message types, request/response formats, error codes, and protocol semantics",
  "keywords": "MCP message types, JSON-RPC 2.0, protocol specification, API reference, tool messages, resource messages, prompt messages",
  "author": {
    "@type": "Organization",
    "name": "How MCP Works"
  },
  "datePublished": "2024-06-24",
  "dateModified": "2024-06-24"
}
</script>