# Protocol Specification

The formal specification for the Model Context Protocol, defining message formats, behavior requirements, and implementation guidelines.

## Specification Overview

The MCP specification is organized into modular components:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  
  <a href="/spec/overview/" class="spec-card" style="display: block; padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; text-decoration: none; color: inherit; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>📋 Protocol Overview</h3>
    <p>Core protocol architecture, design principles, and module organization.</p>
  </a>
  
  <a href="/spec/message-types/" class="spec-card" style="display: block; padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; text-decoration: none; color: inherit; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>📨 Message Types</h3>
    <p>Complete reference for all request, response, and notification formats.</p>
  </a>
  
  <a href="/spec/security-model/" class="spec-card" style="display: block; padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; text-decoration: none; color: inherit; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>🔒 Security Model</h3>
    <p>Authentication, authorization, and transport security requirements.</p>
  </a>
  
  <a href="/spec/revisions/" class="spec-card" style="display: block; padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; text-decoration: none; color: inherit; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>📊 Version History</h3>
    <p>Protocol evolution, version compatibility, and migration guides.</p>
  </a>
  
  <a href="/spec/conformance-tests/" class="spec-card" style="display: block; padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; text-decoration: none; color: inherit; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>✅ Conformance Tests</h3>
    <p>Test suite to verify protocol compliance and implementation correctness.</p>
  </a>
  
</div>

## Quick Reference

### Message Format

All MCP messages follow JSON-RPC 2.0:

```json
{
  "jsonrpc": "2.0",
  "id": "unique-id",
  "method": "namespace/operation",
  "params": {
    // Method-specific parameters
  }
}
```

### Core Namespaces

| Namespace | Purpose | Example Methods |
|-----------|---------|-----------------|
| `initialize` | Session setup | `initialize` |
| `tools` | Tool operations | `tools/list`, `tools/call` |
| `resources` | Resource access | `resources/list`, `resources/read` |
| `prompts` | Prompt templates | `prompts/list`, `prompts/get` |
| `completion` | AI completions | `completion/complete` |

### Transport Requirements

MCP supports multiple transports:

- **stdio**: Local process communication
- **HTTP/HTTPS**: Network API access  
- **WebSocket**: Real-time bidirectional

## Implementation Guidelines

### 1. Version Negotiation

Always start with capability negotiation:

```json
{
  "method": "initialize",
  "params": {
    "protocolVersion": "1.0",
    "capabilities": {
      "tools": true,
      "resources": true
    }
  }
}
```

### 2. Error Handling

Use standard JSON-RPC error codes:

```json
{
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": {
      "param": "toolName",
      "issue": "Tool not found"
    }
  }
}
```

### 3. Schema Validation

All parameters must validate against JSON Schema:

```json
{
  "inputSchema": {
    "type": "object",
    "properties": {
      "query": {
        "type": "string",
        "minLength": 1
      }
    },
    "required": ["query"]
  }
}
```

## Compliance Levels

### Basic Compliance
- ✅ JSON-RPC 2.0 message format
- ✅ Initialize handshake
- ✅ At least one of: tools, resources, or prompts
- ✅ Standard error codes

### Full Compliance
- ✅ All basic requirements
- ✅ Complete capability negotiation
- ✅ Schema validation
- ✅ Batch request support
- ✅ Proper lifecycle management

### Extended Features
- ✅ Streaming responses
- ✅ Resource subscriptions
- ✅ Dynamic capability updates
- ✅ Custom extensions

## Design Principles

The MCP specification follows these core principles:

1. **Simplicity** - Easy to implement correctly
2. **Extensibility** - Add features without breaking compatibility
3. **Security** - Secure by default
4. **Performance** - Efficient for real-world use
5. **Interoperability** - Work across platforms and languages

## Reading the Specification

For implementers:

1. Start with the [Protocol Overview](/spec/overview/)
2. Understand [Message Types](/spec/message-types/)  
3. Review the [Security Model](/spec/security-model/)
4. Test with [Conformance Tests](/spec/conformance-tests/)

!!! important "Specification Status"
    The MCP specification is actively maintained. Check [Version History](/spec/revisions/) for the latest updates and planned changes.

## Contributing to the Spec

Found an issue or have a suggestion? The specification is developed openly:

- Review process on GitHub
- Request for Comments (RFC) system
- Regular community reviews
- Backward compatibility commitment

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "MCP Protocol Specification",
  "description": "The formal specification for the Model Context Protocol",
  "author": {
    "@type": "Organization",
    "name": "How MCP Works"
  }
}
</script>