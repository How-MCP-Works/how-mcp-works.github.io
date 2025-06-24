# Core Concepts

Understanding MCP starts with grasping its fundamental building blocks. This section breaks down the protocol into digestible concepts that will give you a solid foundation for implementation.

## Start Your Learning Journey

<div class="concept-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  
  <div class="concept-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>🤔 What is MCP?</h3>
    <p>Discover the Model Context Protocol - a standardized way for AI models to interact with external systems.</p>
    <a href="/concepts/what-is-mcp/" class="md-button md-button--primary">Learn What →</a>
  </div>
  
  <div class="concept-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>💡 Why It Matters</h3>
    <p>Understand the problems MCP solves and why it's becoming the standard for AI integrations.</p>
    <a href="/concepts/why-it-matters/" class="md-button md-button--primary">Discover Why →</a>
  </div>
  
  <div class="concept-card" style="padding: 1.5rem; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest);">
    <h3>⚙️ How It Works</h3>
    <p>Explore the architecture, message flow, and core components that power MCP.</p>
    <a href="/concepts/how-it-works/" class="md-button md-button--primary">See How →</a>
  </div>
  
</div>

## Quick Reference

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  
  <a href="/concepts/glossary/" style="display: block; padding: 1rem; text-align: center; background: var(--md-code-bg-color); border-radius: 8px; text-decoration: none; color: inherit;">
    <strong>📖 Glossary</strong><br>
    <small>Key terms and definitions</small>
  </a>
  
  <a href="/concepts/faq/" style="display: block; padding: 1rem; text-align: center; background: var(--md-code-bg-color); border-radius: 8px; text-decoration: none; color: inherit;">
    <strong>❓ FAQ</strong><br>
    <small>Common questions answered</small>
  </a>
  
</div>

## Core Components at a Glance

```mermaid
graph TB
    subgraph "MCP Ecosystem"
        Client[AI Client]
        Server[MCP Server]
        Transport[Transport Layer]
        Tools[Tools]
        Resources[Resources]
        Prompts[Prompts]
    end
    
    Client <--> Transport
    Transport <--> Server
    Server --> Tools
    Server --> Resources
    Server --> Prompts
    
    style Client fill:#7c4dff,color:white
    style Server fill:#7c4dff,color:white
    style Transport fill:#ffc107,color:black
```

## Learning Path

Whether you're a developer, architect, or product manager, we've structured these concepts to build on each other:

1. **Start with "What is MCP?"** - Get the big picture
2. **Move to "Why It Matters"** - Understand the value proposition  
3. **Deep dive into "How It Works"** - Master the technical details
4. **Reference the Glossary** - Clarify any terms
5. **Check the FAQ** - Find quick answers

!!! tip "Pro Tip"
    After understanding these concepts, head to our [Quick Start Guide](/samples/hello-mcp/) to see MCP in action with real code examples.

## What You'll Learn

By the end of this section, you'll understand:

- ✅ The problem MCP solves in the AI ecosystem
- ✅ How MCP differs from traditional API approaches
- ✅ The client-server architecture and message flow
- ✅ Key terminology used throughout the documentation
- ✅ Answers to common questions and concerns

Ready to begin? Let's start with understanding [What is MCP?](/concepts/what-is-mcp/)