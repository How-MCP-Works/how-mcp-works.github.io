# MCP Glossary - Model Context Protocol Terms

A comprehensive reference dictionary of terms, definitions, and concepts used throughout the Model Context Protocol ecosystem. Essential for developers, architects, and AI engineers working with MCP implementations.

## A

### **Agent**
An AI system that can autonomously perform tasks using MCP tools and resources. Agents act as MCP clients.

### **Arguments**
Parameters passed to MCP tools or prompts. Always validated against a JSON Schema.

### **Authentication**
The process of verifying the identity of an MCP client or server. Supports multiple methods including OAuth 2.0, API keys, and mTLS.

### **Authorization**
Determining what actions an authenticated client can perform. MCP implements fine-grained permission models.

## B

### **Batch Request**
Multiple JSON-RPC requests sent in a single message for improved efficiency.

### **Binary Transport**
A transport mechanism that sends data in binary format rather than text, useful for performance-critical applications.

## C

### **Capability**
A feature that a client or server supports. Capabilities are negotiated during connection initialization.

### **Client**
An application (typically an AI model or assistant) that connects to MCP servers to use tools and access resources.

### **Connection**
An active communication channel between an MCP client and server over a transport.

### **Content**
The data returned by tools, resources, or prompts. Can be text, images, or other MIME types.

### **Context**
Information about the current state and environment available to the AI model when making MCP requests.

## D

### **Discovery**
The process by which clients learn about available tools, resources, and prompts from a server.

## E

### **Error Code**
Standardized numeric codes used to indicate specific error conditions in MCP responses.

### **Execution**
The act of running a tool with provided arguments and returning results.

## F

### **Function Schema**
JSON Schema definition describing a tool's parameters, used for validation and documentation.

## G

### **Gateway**
An MCP server that provides access to multiple backend services through a unified interface.

## H

### **Handler**
A function in an MCP server that processes specific types of requests (tools, resources, prompts).

### **HTTP Transport**
Communication mechanism using HTTP/HTTPS for client-server interaction.

## I

### **Initialization**
The handshake process where client and server exchange capability information.

### **Input Schema**
JSON Schema that defines the expected structure of tool or prompt arguments.

### **Integration**
Connecting an external service or tool to make it accessible via MCP.

## J

### **JSON-RPC**
The message protocol used by MCP. Version 2.0 specifically.

### **JSON Schema**
The standard used to describe and validate the structure of data in MCP.

## L

### **Lifecycle**
The stages of an MCP connection: connecting, initializing, active, closing.

### **List Changed Notification**
A server notification that available tools, resources, or prompts have changed.

## M

### **Message**
A single JSON-RPC request or response exchanged between client and server.

### **Method**
The operation being requested in a JSON-RPC message (e.g., "tools/call", "resources/read").

### **MIME Type**
Media type indicator for resource content (e.g., "text/plain", "application/json").

### **MCP**
Model Context Protocol - the standard for AI-to-tool communication.

## N

### **Notification**
A message sent without expecting a response, used for events like capability changes.

## O

### **OAuth**
Authentication protocol supported by MCP for secure client authorization.

## P

### **Parameter**
An individual argument passed to a tool or prompt.

### **Permission**
A specific action that a client is allowed to perform on a server.

### **Prompt**
A reusable template for common interactions, with variable substitution support.

### **Protocol Version**
The version of MCP being used, ensuring compatibility between clients and servers.

## R

### **Request**
A message from client to server asking for an operation to be performed.

### **Resource**
A data source exposed by an MCP server, identified by a URI.

### **Response**
A message from server to client containing the result of a request.

### **Result**
The success output of an MCP operation, contained in the response.

## S

### **Schema**
JSON Schema definition for validating data structures in MCP.

### **Server**
An application that exposes tools, resources, and prompts to MCP clients.

### **Session**
An active connection between a client and server with maintained state.

### **Standard I/O (stdio)**
Transport using standard input/output streams, common for local processes.

### **Streaming**
Sending data progressively rather than all at once, supported for large responses.

### **Subscription**
Client registration to receive updates when resources change.

## T

### **Tool**
A function exposed by an MCP server that clients can execute with parameters.

### **Transport**
The communication layer that carries MCP messages (stdio, HTTP, WebSocket).

### **Type**
The data type of a parameter or return value, defined in JSON Schema.

## U

### **URI**
Uniform Resource Identifier used to uniquely identify MCP resources.

### **Unique ID**
Identifier for matching requests with responses in JSON-RPC.

## V

### **Validation**
Automatic checking of tool arguments against their schema before execution.

### **Version**
The protocol version, ensuring compatibility between implementations.

## W

### **WebSocket**
Bidirectional transport protocol enabling real-time MCP communication.

---

!!! tip "Contributing to the Glossary"
    Found a term that's not defined? Suggest additions through our [GitHub repository](https://github.com/How-MCP-Works/how-mcp-works.github.io).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "name": "MCP Glossary",
  "description": "Comprehensive glossary of Model Context Protocol terms",
  "url": "https://howmcpworks.com/concepts/glossary/"
}
</script>