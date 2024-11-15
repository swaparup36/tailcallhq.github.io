---
title: "@graphQL"
description: The @graphQL directive resolves a field or node by a GraphQL API.
slug: graphql-directive
---

## @graphQL Directive

The `@graphQL` directive allows you to resolve a field or node by querying another GraphQL API. This is useful for integrating multiple GraphQL services into a single schema.

### Usage

Consider the following example:

```graphql
type Query {
  user(id: Int!): User
    @graphQL(url: "https://api.example.com/graphql", query: "{ user(id: {{.args.id}}) { id name email } }")
}
```

In this example, the `user` field in the `Query` type fetches user data from an external GraphQL API. The `url` parameter specifies the endpoint, and the `query` parameter defines the GraphQL query to execute.

### Parameters

- `url`: The URL of the external GraphQL API.
- `query`: The GraphQL query to be executed, with placeholders for arguments.

This directive simplifies the process of integrating multiple GraphQL services, allowing for seamless data fetching across different APIs.
