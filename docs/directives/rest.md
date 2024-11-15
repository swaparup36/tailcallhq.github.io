---
title: "@rest"
description: The @rest directive allows exposing REST endpoints on top of GraphQL.
---

## @rest Directive

The `@rest` directive enables you to expose REST endpoints within your GraphQL schema. This allows you to integrate existing REST APIs into your GraphQL API seamlessly.

### Usage

Here’s an example of how to use the `@rest` directive:

```graphql
type Query {
  posts: [Post] @rest(url: "https://jsonplaceholder.typicode.com/posts")
}

type Post {
  id: Int!
  title: String!
  body: String!
}
```

In this example, the `posts` field fetches data from a REST API endpoint. The `url` parameter specifies the endpoint to call.

### Parameters

- `url`: The URL of the REST API endpoint to fetch data from.

The `@rest` directive simplifies the integration of REST APIs into your GraphQL schema, allowing for a unified data-fetching approach.
