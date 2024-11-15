---
title: "@expr"
description: The @expr directive allows embedding of a constant response within the schema.
---

## @expr Directive

The `@expr` directive allows you to embed a constant response within your GraphQL schema. This is useful for scenarios where the response is unchanging.

### Usage

Here’s an example of how to use the `@expr` directive:

```graphql
type Query {
  greeting: String @expr(body: {value: "Hello, World!"})
}
```

In this example, the `greeting` field always returns the string "Hello, World!".

### Parameters

- `body`: The response body to be returned.

The `@expr` directive provides a simple way to include static responses in your GraphQL schema, enhancing flexibility and ease of use.
