---
title: "@link"
description: The @link directive imports external resources into the GraphQL schema.
---

## @link Directive

The `@link` directive allows you to import external resources, such as configuration files or schemas, into your GraphQL schema. This is useful for modularizing your schema.

### Usage

Here’s an example of how to use the `@link` directive:

```graphql
schema @link(type: "Config", src: "path/to/config.json") {
  query: Query
}
```

In this example, the schema imports a configuration file located at `path/to/config.json`.

### Parameters

- `type`: The type of resource being linked.
- `src`: The source path of the resource.

The `@link` directive helps keep your GraphQL schema organized and modular by allowing you to import external resources.
