# Resources & Downloads

Essential tools, documentation, and community resources for MCP developers and implementers.

## Quick Access

<div class="resource-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  
  <a href="/resources/downloads/" class="resource-card" style="display: block; padding: 1.5rem; background: var(--md-primary-fg-color); color: white; border-radius: 8px; text-decoration: none;">
    <h3>📦 Downloads</h3>
    <p>SDKs, tools, examples, and starter templates</p>
  </a>
  
  <a href="/resources/graphics/" class="resource-card" style="display: block; padding: 1.5rem; background: var(--md-accent-fg-color); color: black; border-radius: 8px; text-decoration: none;">
    <h3>🎨 Graphics & Slides</h3>
    <p>Logos, diagrams, presentation templates</p>
  </a>
  
  <a href="/resources/references/" class="resource-card" style="display: block; padding: 1.5rem; background: var(--md-primary-fg-color); color: white; border-radius: 8px; text-decoration: none;">
    <h3>📚 Academic References</h3>
    <p>Papers, citations, research materials</p>
  </a>
  
  <a href="/resources/articles/" class="resource-card" style="display: block; padding: 1.5rem; background: var(--md-accent-fg-color); color: black; border-radius: 8px; text-decoration: none;">
    <h3>📰 External Articles</h3>
    <p>Community blogs, tutorials, case studies</p>
  </a>
  
</div>

## Developer Tools

### Official SDKs

| Language | Package | Installation | Documentation |
|----------|---------|--------------|---------------|
| **Python** | `mcp-sdk` | `pip install mcp-sdk` | [Python Docs](/sdks/python/) |
| **TypeScript** | `@modelcontextprotocol/sdk` | `npm install @modelcontextprotocol/sdk` | [TS Docs](/sdks/typescript/) |
| **Rust** | `mcp-rs` | `cargo add mcp-rs` | [Rust Docs](/sdks/rust/) |
| **Go** | `github.com/mcp/go-sdk` | `go get github.com/mcp/go-sdk` | [Go Docs](/sdks/go/) |

### Development Tools

```bash
# MCP CLI Tools
npm install -g @mcp/cli

# Server Development Kit
pip install mcp-dev-tools

# Testing Framework
npm install -g mcp-test-suite

# Protocol Inspector
pip install mcp-inspector
```

### Code Generators

Generate boilerplate MCP servers and clients:

```bash
# Generate Python server
mcp generate server --lang=python --name=my-server

# Generate TypeScript client
mcp generate client --lang=typescript --name=my-client

# Generate from OpenAPI spec
mcp generate --from-openapi api-spec.yaml
```

## Sample Projects

### Server Examples

<div class="samples-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 2rem 0;">
  
  <div class="sample-card" style="padding: 1rem; background: var(--md-code-bg-color); border-radius: 8px;">
    <h4>🛡️ Wazuh Security Server</h4>
    <p>SIEM integration for security monitoring and incident response</p>
    <div style="margin-top: 1rem;">
      <a href="https://github.com/gensecaihq/Wazuh-MCP-Server" class="md-button md-button--primary" style="margin-right: 0.5rem;">GitHub</a>
      <a href="/samples/security-monitoring/" class="md-button">Tutorial</a>
    </div>
  </div>
  
  <div class="sample-card" style="padding: 1rem; background: var(--md-code-bg-color); border-radius: 8px;">
    <h4>🔥 pfSense Firewall Server</h4>
    <p>Network security and firewall management interface</p>
    <div style="margin-top: 1rem;">
      <a href="https://github.com/gensecaihq/pfsense-mcp-server" class="md-button md-button--primary" style="margin-right: 0.5rem;">GitHub</a>
      <a href="/samples/network-security/" class="md-button">Tutorial</a>
    </div>
  </div>
  
  <div class="sample-card" style="padding: 1rem; background: var(--md-code-bg-color); border-radius: 8px;">
    <h4>🗃️ Database Server</h4>
    <p>SQLite/PostgreSQL query interface</p>
    <div style="margin-top: 1rem;">
      <a href="https://github.com/mcp-examples/database-server" class="md-button md-button--primary" style="margin-right: 0.5rem;">GitHub</a>
      <a href="/samples/database-connector/" class="md-button">Tutorial</a>
    </div>
  </div>
  
  <div class="sample-card" style="padding: 1rem; background: var(--md-code-bg-color); border-radius: 8px;">
    <h4>📁 File System Server</h4>
    <p>Local file access and manipulation</p>
    <div style="margin-top: 1rem;">
      <a href="https://github.com/mcp-examples/filesystem-server" class="md-button md-button--primary" style="margin-right: 0.5rem;">GitHub</a>
      <a href="/samples/filesystem/" class="md-button">Tutorial</a>
    </div>
  </div>
  
  <div class="sample-card" style="padding: 1rem; background: var(--md-code-bg-color); border-radius: 8px;">
    <h4>🌐 Web API Server</h4>
    <p>REST API proxy with caching</p>
    <div style="margin-top: 1rem;">
      <a href="https://github.com/mcp-examples/web-api-server" class="md-button md-button--primary" style="margin-right: 0.5rem;">GitHub</a>
      <a href="/samples/web-api/" class="md-button">Tutorial</a>
    </div>
  </div>
  
  <div class="sample-card" style="padding: 1rem; background: var(--md-code-bg-color); border-radius: 8px;">
    <h4>🔧 Development Tools</h4>
    <p>Git, terminal, and build system integration</p>
    <div style="margin-top: 1rem;">
      <a href="https://github.com/mcp-examples/dev-tools-server" class="md-button md-button--primary" style="margin-right: 0.5rem;">GitHub</a>
      <a href="/samples/dev-tools/" class="md-button">Tutorial</a>
    </div>
  </div>
  
</div>

### Client Examples

<div class="samples-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 2rem 0;">
  
  <div class="sample-card" style="padding: 1rem; background: var(--md-code-bg-color); border-radius: 8px;">
    <h4>🤖 Chat Bot Client</h4>
    <p>Discord/Slack bot with MCP integration</p>
    <div style="margin-top: 1rem;">
      <a href="https://github.com/mcp-examples/chatbot-client" class="md-button md-button--primary" style="margin-right: 0.5rem;">GitHub</a>
      <a href="/samples/chatbot/" class="md-button">Tutorial</a>
    </div>
  </div>
  
  <div class="sample-card" style="padding: 1rem; background: var(--md-code-bg-color); border-radius: 8px;">
    <h4>📊 Analytics Dashboard</h4>
    <p>React dashboard with real-time MCP data</p>
    <div style="margin-top: 1rem;">
      <a href="https://github.com/mcp-examples/dashboard-client" class="md-button md-button--primary" style="margin-right: 0.5rem;">GitHub</a>
      <a href="/samples/dashboard/" class="md-button">Tutorial</a>
    </div>
  </div>
  
  <div class="sample-card" style="padding: 1rem; background: var(--md-code-bg-color); border-radius: 8px;">
    <h4>📱 Mobile App</h4>
    <p>React Native app with MCP backend</p>
    <div style="margin-top: 1rem;">
      <a href="https://github.com/mcp-examples/mobile-client" class="md-button md-button--primary" style="margin-right: 0.5rem;">GitHub</a>
      <a href="/samples/mobile-integration/" class="md-button">Tutorial</a>
    </div>
  </div>
  
  <div class="sample-card" style="padding: 1rem; background: var(--md-code-bg-color); border-radius: 8px;">
    <h4>🖥️ Desktop Application</h4>
    <p>Electron app with local MCP servers</p>
    <div style="margin-top: 1rem;">
      <a href="https://github.com/mcp-examples/desktop-client" class="md-button md-button--primary" style="margin-right: 0.5rem;">GitHub</a>
      <a href="/samples/desktop/" class="md-button">Tutorial</a>
    </div>
  </div>
  
</div>

## Testing & Debugging

### MCP Test Suite

Comprehensive testing framework for MCP implementations:

```bash
# Install test suite
npm install -g mcp-test-suite

# Test server compliance
mcp-test server --url=http://localhost:8080

# Test client functionality
mcp-test client --server=./my-server

# Generate test reports
mcp-test --output=html --coverage
```

### Debugging Tools

```bash
# Protocol inspector
mcp-inspect --trace --server=./my-server

# Performance profiler
mcp-profile --server=./my-server --duration=60s

# Load testing
mcp-load-test --concurrent=100 --requests=1000
```

### Development Utilities

```python
# Python debugging helper
from mcp.debug import MCPDebugger

debugger = MCPDebugger()
debugger.trace_messages = True
debugger.log_performance = True

# Usage in server
@debugger.trace_tool
@server.tool()
async def my_tool(param: str):
    return f"Result: {param}"
```

## Documentation & Learning

### Interactive Tutorials

- **[MCP Playground](https://playground.howmcpworks.com)** - Browser-based MCP sandbox
- **[Interactive Protocol Explorer](https://explorer.howmcpworks.com)** - Visualize message flows
- **[Schema Validator](https://validator.howmcpworks.com)** - Validate JSON schemas

### Video Tutorials

| Topic | Duration | Skill Level | Link |
|-------|----------|-------------|------|
| MCP Fundamentals | 15 min | Beginner | [Watch](https://youtube.com/mcp-fundamentals) |
| Building Your First Server | 30 min | Beginner | [Watch](https://youtube.com/first-server) |
| Advanced Architecture Patterns | 45 min | Advanced | [Watch](https://youtube.com/architecture) |
| Production Deployment | 25 min | Intermediate | [Watch](https://youtube.com/deployment) |
| Security Best Practices | 20 min | Intermediate | [Watch](https://youtube.com/security) |

### Webinar Series

- **Monthly MCP Deep Dives** - First Wednesday of each month
- **Community Showcase** - Third Friday showcasing community projects
- **Office Hours** - Weekly Q&A with core maintainers

## Community Resources

### Official Channels

- **GitHub Discussions**: [github.com/How-MCP-Works/discussions](https://github.com/How-MCP-Works/discussions)
- **Discord Server**: [discord.gg/mcp-community](https://discord.gg/mcp-community)
- **Stack Overflow**: Tag your questions with `model-context-protocol`
- **Reddit**: [r/ModelContextProtocol](https://reddit.com/r/ModelContextProtocol)

### Community Projects

| Project | Description | Maintainer | Stars |
|---------|-------------|------------|-------|
| **Wazuh MCP Server** | Security monitoring integration for Wazuh SIEM | @gensecaihq | ⭐ 85 |
| **pfSense MCP Server** | Network security and firewall management | @gensecaihq | ⭐ 42 |
| **MCP Explorer** | Visual tool for MCP server discovery | @community-dev | ⭐ 1.2k |
| **MCP Gateway** | Production-ready API gateway | @enterprise-team | ⭐ 890 |
| **MCP Metrics** | Monitoring and observability | @observability-org | ⭐ 650 |
| **MCP Security Scanner** | Security vulnerability detection | @security-group | ⭐ 420 |

### Awesome MCP

Curated list of awesome MCP resources:

- **[awesome-mcp](https://github.com/How-MCP-Works/awesome-mcp)** - Community-maintained list
- **[mcp-examples](https://github.com/How-MCP-Works/mcp-examples)** - Example implementations
- **[mcp-tools](https://github.com/How-MCP-Works/mcp-tools)** - Developer utilities

## Standards & Specifications

### Protocol Documentation

- **[JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)** - Underlying protocol
- **[JSON Schema](https://json-schema.org/)** - Schema validation
- **[OpenRPC](https://open-rpc.org/)** - API documentation standard

### Related Standards

- **[OpenAPI 3.0](https://swagger.io/specification/)** - REST API documentation
- **[AsyncAPI](https://www.asyncapi.com/)** - Asynchronous API documentation  
- **[CloudEvents](https://cloudevents.io/)** - Event schema specification

## Data Formats & Examples

### Message Examples

Complete request/response examples:

```json
{
  "jsonrpc": "2.0",
  "id": "req-123",
  "method": "tools/call",
  "params": {
    "name": "search_database",
    "arguments": {
      "query": "SELECT * FROM users WHERE active = true",
      "limit": 100
    }
  }
}
```

### Schema Templates

Common schema patterns:

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "SQL query to execute",
      "pattern": "^SELECT.*",
      "maxLength": 1000
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "maxItems": 10
    }
  },
  "required": ["query"],
  "additionalProperties": false
}
```

## Performance Benchmarks

### Reference Implementations

| Implementation | Language | Throughput (req/sec) | Latency (p99) | Memory Usage |
|----------------|----------|---------------------|---------------|--------------|
| **mcp-python** | Python 3.11 | 5,000 | 15ms | 45MB |
| **mcp-typescript** | Node.js 18 | 8,000 | 12ms | 38MB |
| **mcp-rust** | Rust 1.70 | 15,000 | 8ms | 25MB |
| **mcp-go** | Go 1.21 | 12,000 | 10ms | 30MB |

### Optimization Tips

1. **Connection Pooling** - Reuse connections for better performance
2. **Batching** - Group requests to reduce round trips
3. **Caching** - Cache tool metadata and frequent responses
4. **Async Processing** - Use non-blocking I/O operations
5. **Compression** - Enable gzip for large payloads

## License & Legal

### Open Source Licenses

- **MCP Protocol**: MIT License
- **Reference Implementations**: Apache 2.0
- **Documentation**: CC BY 4.0
- **Examples**: MIT License

### Contributing Guidelines

1. **Code of Conduct**: Be respectful and inclusive
2. **Contribution Process**: Fork, branch, PR, review
3. **Testing Requirements**: 80%+ code coverage
4. **Documentation**: Update docs with code changes

### Trademark Usage

- **MCP Logo**: Available under CC BY-SA 4.0
- **Brand Guidelines**: [Download Brand Kit](/resources/brand-kit.zip)
- **Trademark Policy**: [View Policy](/resources/trademark-policy/)

## Support & Professional Services

### Community Support

- **GitHub Issues**: Bug reports and feature requests
- **Community Forums**: Peer-to-peer help
- **Documentation**: Comprehensive guides and tutorials

### Commercial Support

- **Priority Support**: SLA-backed assistance
- **Custom Development**: Tailored MCP solutions
- **Training & Consulting**: Expert guidance and workshops
- **Enterprise Licensing**: Volume licensing and support

### Service Providers

| Company | Services | Location | Contact |
|---------|----------|----------|---------|
| **MCP Solutions Inc.** | Implementation, Training | Global | [contact@mcpsolutions.com](mailto:contact@mcpsolutions.com) |
| **AI Integration Labs** | Custom Development | US, EU | [hello@aiintegration.io](mailto:hello@aiintegration.io) |
| **Protocol Experts** | Consulting, Architecture | APAC | [info@protocolexperts.com](mailto:info@protocolexperts.com) |

!!! info "Stay Updated"
    Subscribe to our newsletter for the latest MCP news, updates, and community highlights.
    
    [Subscribe](https://newsletter.howmcpworks.com){ .md-button .md-button--primary }

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "MCP Resources and Downloads",
  "description": "Comprehensive collection of Model Context Protocol resources including SDKs, tools, examples, documentation, and community resources",
  "keywords": "MCP resources, model context protocol tools, SDK downloads, developer resources, community support",
  "author": {
    "@type": "Organization",
    "name": "How MCP Works"
  },
  "datePublished": "2024-06-24",
  "dateModified": "2024-06-24"
}
</script>