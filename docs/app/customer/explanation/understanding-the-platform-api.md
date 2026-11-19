---
description: A beginner's explanation of APIs, endpoints, API keys and the platform's OpenAPI reference.
---

# Understanding the Platform API

The platform exposes a **platform API** so software can read and change data without a person clicking through the interface. This article explains the concepts for someone who is new to APIs. For the tasks, see [How to Use the Interactive API Documentation](../how-to/using-api-docs.md).

## What an API is

An **API** (Application Programming Interface) is a contract for one program to talk to another.

Think of a restaurant:

- the **menu** is the API documentation — what you can ask for;
- **you** are the client application;
- the **waiter** is the API — it carries your request;
- the **kitchen** is the platform's data and services.

You do not enter the kitchen. You ask for something on the menu, and the waiter returns it in a defined form. That contract is what makes integration possible without knowing how the database works.

## Endpoints and methods

An **endpoint** is one address in that contract, for example:

- `GET /definition/survey` — return the schema for a survey definition;
- `GET /customer/{teamId}/team` — return a team's configuration.

The **method** says what you want to do:

| Method | Meaning |
| --- | --- |
| `GET` | Read something. |
| `POST` | Create something or invoke an action. |
| `PUT` / `PATCH` | Change something. |
| `DELETE` | Remove something. |

An endpoint can require **path parameters** (`{teamId}`), **query parameters** (`?lang=fr`) or a **request body** (the data to create or change). The documentation lists each one.

## Requests and responses

An API call has three parts:

1. **The request** — method, URL, headers and optional body.
2. **The response** — an HTTP status code and, usually, a JSON body.
3. **The status** — `200` success, `401` authentication failed, `403` not permitted, `404` not found, `422` invalid data, `500` server error.

JSON is a text format of keys and values; it is how the request and response bodies are written. See [What is JSON?](../../survey/explanation/what-is-json.md) for the basics.

## API keys

An **API key** is a secret assigned to a team. It identifies the caller and carries the team's permissions.

Treat it like a password:

- keep it out of client-side code and public repositories;
- give each integration its own key so one can be revoked without breaking the others;
- revoke a key immediately if it may have leaked.

Keys are managed in **Team Settings → API Keys**. A key belongs to one team, so an integration sees that team's data.

## OpenAPI and the interactive reference

The platform publishes an **OpenAPI** description: a machine-readable contract listing every endpoint, its parameters, request and response shapes, and the security scheme.

The **interactive reference** at `/api` renders that description with Scalar. You can read an endpoint, enter your API key, send a live request and inspect the response in the browser. That is the fastest way to learn what an endpoint expects.

## What the API exposes

Endpoints are grouped by service area:

- **Data definitions** — schemas for survey and form structures.
- **Survey definition** — create, read, update and publish survey definitions.
- **Customer and team** — organization and team configuration.
- **Listserv** — channel, broadcast and subscriber operations.

What you can do through the API is bounded by the same access rules as the interface. An API key does not bypass permissions; it acts as the team it belongs to.

## When to use the API

Use it when:

- data must move to another system automatically (a data warehouse, a CRM, a reporting pipeline);
- many records must be created or updated in a repeatable way;
- an integration must react to events (combine it with [webhooks](../../survey/how-to/webhooks.md));
- you are building a custom front end.

Do not use it for a one-off task the interface already does well; the interface enforces the same rules and is easier to audit.

## Related Content

- [How to Use the Interactive API Documentation](../how-to/using-api-docs.md): Authenticate and send a test request.
- [How to Manage API Keys](../how-to/manage-api-keys.md): Creating and revoking a team key.
- [API Keys Reference](../reference/team/api-keys.md): Key fields and lifecycle.
- [Platform API Reference](/api.html): The OpenAPI endpoints.
- [What is JSON?](../../survey/explanation/what-is-json.md): Reading request and response bodies.
