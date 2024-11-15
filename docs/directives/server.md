---
title: "@server"
description: The @server directive provides server configurations for GraphQL behavior tuning.
slug: ../server-directive
---

## @server Directive

The `@server` directive allows you to configure server settings for your GraphQL API. This includes options for performance tuning, security, and behavior customization.

### Usage

Here’s an example of how to use the `@server` directive:

```graphql
schema @server(port: 8000) {
  query: Query
}
```

In this example, the server is configured to listen on port 8000.

### Parameters

- `port`: The port on which the server will run.
- Additional parameters can be specified for various server configurations.

The `@server` directive provides flexibility in configuring your GraphQL API, allowing for tailored performance and behavior.
