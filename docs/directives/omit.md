---
title: "@omit"
description: The @omit directive excludes fields or nodes from the generated schema.
slug: omit-directive
---

## @omit Directive

The `@omit` directive allows you to exclude fields or nodes from the generated GraphQL schema. This is useful for hiding sensitive information or simplifying the schema.

### Usage

Here’s an example of how to use the `@omit` directive:

```graphql
type User {
  id: Int!
  name: String!
  email: String! @omit
}
```

In this example, the `email` field is omitted from the generated schema, meaning it will not be accessible through the GraphQL API.

### Parameters

- No parameters are required.

The `@omit` directive provides a straightforward way to control the visibility of fields in your GraphQL schema, enhancing security and simplicity.
