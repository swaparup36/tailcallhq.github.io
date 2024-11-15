---
title: "@http"
description: The @http directive resolves a field or node by a REST API.
---

## @http Directive

The `@http` directive allows you to resolve a field or node by querying a REST API. This is useful for integrating RESTful services into your GraphQL schema.

### Usage

Consider the following example:

```graphql
type Query {
  user(id: Int!): User
    @http(url: "https://jsonplaceholder.typicode.com/users/{{.args.id}}")
}

type User {
  id: Int!
  name: String!
  email: String!
}
```

In this example, the `user` field fetches user data from a REST API. The `url` parameter specifies the endpoint, with placeholders for arguments.

### Parameters

- `url`: The URL of the REST API endpoint, which can include placeholders for dynamic values.

The `@http` directive provides a straightforward way to integrate REST APIs into your GraphQL schema, enabling efficient data fetching.
