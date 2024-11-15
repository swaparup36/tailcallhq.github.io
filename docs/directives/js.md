---
title: "@js"
description: The @js directive allows embedding JavaScript functions within the GraphQL schema.
---

## @js Directive

The `@js` directive enables you to embed JavaScript functions within your GraphQL schema. This is useful for executing custom logic during data resolution.

### Usage

Here’s an example of how to use the `@js` directive:

```graphql
type Query {
  calculateSum(a: Int!, b: Int!): Int @js(function: "sumFunction")
}
```

In this example, the `calculateSum` field calls a JavaScript function named `sumFunction` to compute the sum of two integers.

### Parameters

- `function`: The name of the JavaScript function to execute.

The `@js` directive provides flexibility in your GraphQL schema, allowing for custom logic to be executed during data resolution.
