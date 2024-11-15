---
title: "@grpc"
description: The @grpc directive resolves a field or node by a gRPC API.
---

## @grpc Directive

The `@grpc` directive allows you to resolve a field or node by querying a gRPC API. This is useful for integrating gRPC services into your GraphQL schema.

### Usage

Consider the following example:

```graphql
type Query {
  user(id: Int!): User
    @grpc(
      service: "UserService"
      method: "GetUser"
      request: "{ id: {{.args.id}} }"
    )
}

type User {
  id: Int!
  name: String!
  email: String!
}
```

In this example, the `user` field fetches user data from a gRPC service. The `service` and `method` parameters specify the gRPC service and method to call.

### Parameters

- `service`: The name of the gRPC service.
- `method`: The method to invoke on the service.
- `request`: The request payload, which can include placeholders for dynamic values.

The `@grpc` directive simplifies the integration of gRPC services into your GraphQL schema, allowing for efficient data fetching.
