---
title: "@protected"
description: The @protected directive restricts access to fields or nodes based on authentication or authorization.
slug: ../protected-directive
---

## @protected Directive

The `@protected` directive restricts access to fields or nodes in your GraphQL schema based on authentication or authorization rules. This is essential for securing sensitive data.

### Usage

Here’s an example of how to use the `@protected` directive:

```graphql
type Query {
  secretData: String @protected
}
```

In this example, the `secretData` field is protected, meaning only authenticated users can access it.

### Parameters

- You can define custom authentication logic to determine access.

The `@protected` directive helps ensure that sensitive information is only accessible to authorized users, enhancing the security of your GraphQL API.
