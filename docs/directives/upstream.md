---
title: "@upstream"
description: The @upstream directive controls aspects of the upstream server connection.
slug: ../upstream-directive
---

## @upstream Directive

The `@upstream` directive enables control over specific aspects of the upstream server connection, including settings such as timeouts and keep-alive intervals.

### Usage

Here’s an example of how to use the `@upstream` directive:

```graphql
schema @upstream(poolIdleTimeout: 60) {
  query: Query
}
```

In this example, the connection pool will wait for 60 seconds before closing idle connections.

### Parameters

- `poolIdleTimeout`: The duration in seconds before closing idle connections.
- Additional parameters can be specified for various upstream settings.

The `@upstream` directive provides fine-grained control over the connection to upstream services, enhancing performance and reliability.
