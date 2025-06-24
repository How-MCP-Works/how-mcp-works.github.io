# Samples & Tutorials

Learn MCP through hands-on examples and step-by-step tutorials. Each sample is designed to teach specific concepts while building something practical.

## Quick Start Tutorials

<div class="tutorial-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  
  <div class="tutorial-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>🚀 Hello MCP</h3>
    <p><strong>5 minutes</strong> • Beginner</p>
    <p>Build your first MCP server that responds to simple requests. Perfect starting point for newcomers.</p>
    <a href="/samples/hello-mcp/" class="md-button">Start Tutorial →</a>
  </div>
  
  <div class="tutorial-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>🛡️ Security Monitoring</h3>
    <p><strong>25 minutes</strong> • Intermediate</p>
    <p>Integrate AI-powered security monitoring with Wazuh SIEM for threat detection and incident response.</p>
    <a href="/samples/security-monitoring/" class="md-button">Start Tutorial →</a>
  </div>
  
  <div class="tutorial-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>🔥 Network Security</h3>
    <p><strong>30 minutes</strong> • Advanced</p>
    <p>Build intelligent network security management with pfSense firewall integration and automated threat mitigation.</p>
    <a href="/samples/network-security/" class="md-button">Start Tutorial →</a>
  </div>
  
  <div class="tutorial-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>🗄️ Database Connector</h3>
    <p><strong>15 minutes</strong> • Intermediate</p>
    <p>Create an MCP server that safely exposes database queries to AI assistants.</p>
    <a href="/samples/database-connector/" class="md-button">Start Tutorial →</a>
  </div>
  
  <div class="tutorial-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>⚡ Function Calling</h3>
    <p><strong>20 minutes</strong> • Intermediate</p>
    <p>Enable AI models to execute cloud functions and APIs through MCP.</p>
    <a href="/samples/function-calling/" class="md-button">Start Tutorial →</a>
  </div>
  
  <div class="tutorial-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>🔄 Streaming Updates</h3>
    <p><strong>25 minutes</strong> • Advanced</p>
    <p>Implement real-time data streaming with WebSocket transport.</p>
    <a href="/samples/streaming-updates/" class="md-button">Start Tutorial →</a>
  </div>
  
  <div class="tutorial-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>📱 Mobile Integration</h3>
    <p><strong>30 minutes</strong> • Advanced</p>
    <p>Build a React Native app that connects to MCP servers.</p>
    <a href="/samples/mobile-integration/" class="md-button">Start Tutorial →</a>
  </div>
  
</div>

## Learning Path

### 🎯 For Beginners
1. **Start with [Hello MCP](/samples/hello-mcp/)** - Understand the basics
2. **Try [Database Connector](/samples/database-connector/)** - Work with real data
3. **Explore our [FAQ](/concepts/faq/)** - Get answers to common questions

### 🚀 For Developers
1. **Review [Function Calling](/samples/function-calling/)** - Integrate existing APIs
2. **Master [Streaming Updates](/samples/streaming-updates/)** - Handle real-time data
3. **Check [Implementation Guides](/impl/)** - Production best practices

### 🏗️ For Architects
1. **Study all samples** - Understand patterns
2. **Read [Protocol Specification](/spec/)** - Deep technical details
3. **Review [Use Cases](/use-cases/)** - Real-world applications

## What You'll Build

Each tutorial results in a working MCP implementation:

| Tutorial | You'll Build | Key Concepts |
|----------|-------------|---------------|
| Hello MCP | Echo server with tools | Basic protocol, tool definition |
| Database Connector | SQL query interface | Security, resource management |
| Function Calling | API gateway | Tool parameters, error handling |
| Streaming Updates | Live data feed | WebSocket, subscriptions |
| Mobile Integration | React Native client | Client implementation, UI |

## Prerequisites

### General Requirements
- Basic programming knowledge (Python or TypeScript)
- Command line familiarity
- Text editor or IDE

### Language-Specific Setup

=== "Python"
    ```bash
    # Python 3.8 or higher
    python --version
    
    # Install MCP SDK
    pip install mcp
    ```

=== "TypeScript"
    ```bash
    # Node.js 16 or higher
    node --version
    
    # Install MCP SDK
    npm install @modelcontextprotocol/sdk
    ```

## Running the Samples

All samples follow the same pattern:

1. **Clone the sample code**
2. **Install dependencies**
3. **Run the server**
4. **Test with a client**

Each tutorial includes:
- ✅ Complete source code
- ✅ Step-by-step explanations
- ✅ Common pitfalls to avoid
- ✅ Extension ideas
- ✅ Links to run in online environments

## Online Playgrounds

Don't want to install anything? Try MCP in your browser:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <a href="https://replit.com/@mcp/hello-mcp" class="playground-link" style="display: block; padding: 1rem; text-align: center; background: var(--md-primary-fg-color); color: white; border-radius: 8px; text-decoration: none;">
    🔗 Replit Playground
  </a>
  <a href="https://stackblitz.com/edit/mcp-hello" class="playground-link" style="display: block; padding: 1rem; text-align: center; background: var(--md-primary-fg-color); color: white; border-radius: 8px; text-decoration: none;">
    🔗 StackBlitz IDE
  </a>
  <a href="https://codesandbox.io/s/mcp-starter" class="playground-link" style="display: block; padding: 1rem; text-align: center; background: var(--md-primary-fg-color); color: white; border-radius: 8px; text-decoration: none;">
    🔗 CodeSandbox
  </a>
</div>

## Contributing Samples

Have a great MCP example? We welcome contributions:

1. Fork our repository
2. Add your sample following our template
3. Include clear documentation
4. Submit a pull request

!!! tip "Pro Learning Tips"
    - **Type everything** - Don't copy/paste, build muscle memory
    - **Experiment** - Modify the samples and see what happens
    - **Break things** - Understanding errors deepens knowledge
    - **Ask questions** - Our community is here to help

Ready to start? Jump into [Hello MCP →](/samples/hello-mcp/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "MCP Samples and Tutorials",
  "description": "Hands-on tutorials for learning the Model Context Protocol",
  "author": {
    "@type": "Organization",
    "name": "How MCP Works"
  },
  "educationalLevel": "Beginner to Advanced"
}
</script>