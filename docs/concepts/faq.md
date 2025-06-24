# Frequently Asked Questions

Quick answers to common questions about the Model Context Protocol.

## General Questions

### What is MCP?

The Model Context Protocol (MCP) is an open standard that enables AI models to interact with external tools and data sources through a unified interface. It's like USB for AI - one protocol that works everywhere.

### Who created MCP?

MCP was developed and open-sourced by Anthropic to solve the fragmentation problem in AI integrations. It's now maintained by the open-source community.

### Is MCP free to use?

Yes! MCP is completely open-source and free to use. The protocol specification, SDKs, and many server implementations are available under permissive licenses.

### What AI models support MCP?

Currently, Claude Desktop supports MCP natively. More AI platforms are adopting MCP, and any AI system can add MCP support using the available SDKs.

## Technical Questions

### What programming languages can I use?

MCP has official SDKs for:
- Python
- TypeScript/JavaScript
- Rust (community)
- Go (community)

The protocol is language-agnostic, so you can implement it in any language that supports JSON-RPC.

### How does MCP differ from REST APIs?

| Feature | REST API | MCP |
|---------|----------|-----|
| **Purpose** | General web services | AI-specific integrations |
| **Discovery** | Read documentation | Automatic tool discovery |
| **Validation** | Client implements | Built into protocol |
| **Streaming** | Custom implementation | Native support |
| **Standards** | Loose conventions | Strict specification |

### Can I use MCP for real-time applications?

Yes! MCP supports WebSocket transport for real-time, bidirectional communication. You can stream data, receive notifications, and maintain persistent connections.

### What's the performance overhead?

MCP adds minimal overhead:
- JSON-RPC parsing: ~1ms
- Schema validation: ~2-5ms
- Transport latency: Depends on transport type

For most applications, the benefits far outweigh the minimal performance cost.

## Implementation Questions

### How do I get started?

1. Choose your role: Building a server (tool provider) or client (AI application)?
2. Pick an SDK for your preferred language
3. Follow our [Quick Start Guide](/samples/hello-mcp/)
4. Start with a simple "Hello World" implementation

### Can I convert my existing API to MCP?

Absolutely! You can wrap existing APIs with an MCP server:

```python
@server.tool()
async def call_my_api(endpoint: str, params: dict):
    # Call your existing API
    response = await my_api.call(endpoint, params)
    return TextContent(text=json.dumps(response))
```

### How do I handle authentication?

MCP supports multiple authentication methods:
- API keys via headers
- OAuth 2.0 flows
- mTLS for high-security environments
- Custom authentication schemes

### Can MCP servers call other MCP servers?

Yes! An MCP server can act as a client to other servers, enabling powerful composition patterns and microservice architectures.

## Security Questions

### Is MCP secure?

MCP includes several security features:
- Transport encryption (TLS)
- Authentication mechanisms
- Input validation via JSON Schema
- Rate limiting support
- Audit logging capabilities

### How do I restrict what clients can do?

Implement authorization in your server:

```python
@server.tool()
async def sensitive_operation(client_id: str):
    if not has_permission(client_id, "sensitive_op"):
        raise PermissionError("Unauthorized")
    # Proceed with operation
```

### Can I use MCP in production?

Yes! MCP is production-ready. Consider:
- Using HTTPS/WSS transports
- Implementing proper authentication
- Adding rate limiting
- Monitoring and logging
- Following our [Security Best Practices](/impl/security-hardening/)

## Business Questions

### What's the ROI of implementing MCP?

Organizations typically see:
- 60-80% reduction in integration development time
- 50% lower maintenance costs
- 3x faster time-to-market for AI features
- Future-proof architecture (new AIs work automatically)

### Do I need to rewrite everything?

No! You can:
1. Start with one tool or service
2. Wrap existing APIs with MCP
3. Gradually migrate other integrations
4. Keep non-AI integrations as-is

### What about vendor lock-in?

MCP actually prevents vendor lock-in:
- Open standard with no licensing fees
- Switch AI providers without changing integrations
- Community-driven development
- Multiple implementations available

### Is there commercial support?

While MCP itself is open-source, several companies offer:
- Managed MCP hosting
- Implementation consulting
- Enterprise support packages
- Custom development services

## Troubleshooting

### My server isn't connecting

Check these common issues:
1. **Transport mismatch** - Ensure client and server use same transport
2. **Path issues** - Verify stdio server path is correct
3. **Permissions** - Check file/network permissions
4. **Firewall** - Ensure ports are open for network transports

### Tools aren't appearing in my client

Verify:
- Server implements `tools/list` method
- Tools are properly decorated/registered
- Client has tools capability enabled
- No errors during initialization

### I'm getting schema validation errors

Common fixes:
- Ensure arguments match exact schema types
- Check required vs optional fields
- Validate JSON Schema is properly formatted
- Test with minimal arguments first

### Performance is slow

Optimize by:
- Using batch requests for multiple operations
- Implementing caching where appropriate
- Choosing efficient transport (stdio for local)
- Profiling server-side operations

## Community Questions

### How can I contribute?

We welcome contributions:
- Submit bug reports and feature requests
- Improve documentation
- Create new server implementations
- Share your use cases
- Help others in discussions

### Where can I get help?

- Read our comprehensive [documentation](/)
- Check [GitHub Discussions](https://github.com/How-MCP-Works/how-mcp-works.github.io/discussions)
- Review [existing issues](https://github.com/How-MCP-Works/how-mcp-works.github.io/issues)
- Join community forums

### Are there example implementations?

Yes! Check out:
- Our [Samples section](/samples/) for tutorials
- [GitHub topic](https://github.com/topics/mcp) for community servers
- Official SDK examples
- Production [use cases](/use-cases/)

---

!!! question "Still have questions?"
    Can't find what you're looking for? [Open an issue](https://github.com/How-MCP-Works/how-mcp-works.github.io/issues) and we'll help!

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is MCP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Model Context Protocol (MCP) is an open standard that enables AI models to interact with external tools and data sources through a unified interface."
      }
    },
    {
      "@type": "Question",
      "name": "Is MCP free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! MCP is completely open-source and free to use. The protocol specification, SDKs, and many server implementations are available under permissive licenses."
      }
    }
  ]
}
</script>