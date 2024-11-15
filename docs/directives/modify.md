---
title: "@modify"
description: The @modify directive enables changes to attributes of fields or nodes in the schema.
slug: modify-directive
---

## @modify Directive

The `@modify` directive allows you to change attributes of fields or nodes in your GraphQL schema. This can include omitting fields, renaming them, or altering their types.

### Usage

Here’s an example of how to use the `@modify` directive:

```graphql
type User {
  id: Int!
  name: String!
  email: String!
  address: Address @modify(omit: true)
}

type Address {
  street: String!
  city: String!
}
```

In this example, the `@modify(omit: true)` directive is applied to the `address` field, which means it will not be included in the generated schema for the `User` type.

### Parameters

- `omit`: A boolean value that indicates whether to exclude the field from the schema.

The `@modify` directive provides flexibility in shaping your GraphQL schema according to your needs, allowing for cleaner and more efficient data structures.
