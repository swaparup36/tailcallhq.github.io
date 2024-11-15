---
title: "@telemetry"
description: The @telemetry directive integrates with OpenTelemetry for observability in GraphQL services.
slug: ../telemetry-directive
---

## @telemetry Directive

The `@telemetry` directive facilitates integration with OpenTelemetry, enhancing the observability of your GraphQL services. This directive captures traces and metrics for monitoring application performance.

### Usage

Here’s an example of how to use the `@telemetry` directive:

```graphql
schema @telemetry {
  query: Query
}
```

In this example, the schema is configured to capture telemetry data.

### Parameters

- You can specify various parameters to customize the telemetry data captured, such as `export` options for different telemetry backends.

The `@telemetry` directive empowers developers with insights into application performance, enabling proactive optimization and maintenance.
