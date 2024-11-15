---
title: "@call"
description: The @call directive invokes a query or mutation from another query or mutation field.
slug: ../call-directive
---

## @call Directive

The `@call` directive allows you to invoke a query or mutation from another query or mutation field. This is useful for reducing redundancy and adhering to the DRY (Don't Repeat Yourself) principle.

### Usage

Here’s an example of how to use the `@call` directive:

```graphql
type Mutation {
  createUser(input: UserInput): User
    @http(
      url: "https://api.example.com/users"
      method: "POST"
    )

  registerUser(input: UserInput): User
    @call(
      steps: [
        {
          mutation: "createUser"
          args: {input: "{{.args.input}}"}
        }
      ]
    )
}
```

In this example, the `registerUser` mutation calls the `createUser` mutation, reusing its logic.

### Parameters

- `steps`: An array of objects that define the operations to be executed.

The `@call` directive simplifies the management of complex GraphQL schemas by allowing for the composition of resolvers.
