---
description: Learn what APIs and endpoints are, and how to test live endpoints using your team API key in the interactive API documentation.
---

# How to Use the Interactive API Documentation

Whether you are a developer integrating custom software or a team member exploring available services, our **Interactive API Reference** lets you inspect and test live endpoints directly from your browser.

This guide explains fundamental API concepts in plain language and provides step-by-step instructions for authenticating and testing endpoints using your Team API Key.

---

## Understanding the Basics: What is an API?

If you are new to web services, technical terms can sound overwhelming. Here is a simple explanation of the core concepts:

### What is an API?

**API** stands for **Application Programming Interface**.

Think of an API like a **waiter in a restaurant**:

- You (the client application) look at the **menu** (the API documentation).
- You place an order with the **waiter** (the API).
- The waiter carries your request to the **kitchen** (our database and servers), retrieves the prepared information, and delivers it back to you.

An API allows external software programs to securely exchange data automatically without requiring manual human interaction.

### What is an Endpoint?

An **endpoint** is a specific web address on a server designated for a specific task or resource.

Using the restaurant analogy, an endpoint is like a specific item on the menu. For example:

- `GET /definition/survey`: Fetches the formal data schema for surveys.
- `GET /customer/{teamId}/team`: Fetches information about a specific team.

### What is an API Key?

An **API key** is a unique, secure secret token assigned to your team. It functions like a digital **VIP pass** or **security keycard**: it identifies your team to our servers and verifies that you have permission to access or modify your data.

> [!TIP]
> If you do not have an API key yet, see our guide on [How to Manage Team API Keys](./manage-api-keys.md) to generate one in the Customer Portal.

---

## Step-by-Step: Testing Endpoints in the Interactive API Reference

The interactive API documentation is available at **[https://a11y-docs.web.app/api](https://a11y-docs.web.app/api)** (or [https://a11y-docs.web.app/api.html](https://a11y-docs.web.app/api.html)).

Follow these steps to authenticate and test live requests directly in your browser.

### Step 1: Open the API Reference Page

Open your browser and navigate to **[https://a11y-docs.web.app/api](https://a11y-docs.web.app/api)**.

The page loads an interactive Scalar documentation dashboard listing all available endpoints categorized by service area.

### Step 2: Enter Your API Key for Authentication

To test endpoints that require authentication:

1. Locate the **Authorize** or **Security** section at the top of the interface or inside the test drawer for an endpoint.
2. Find the **API Key** or **Bearer Token** input field.
3. Paste your generated Team API Key secret into the field.

::: tip
Once entered, the API documentation tool automatically attaches your key to all subsequent test requests during your session.
:::

### Step 3: Select an Endpoint to Test

In the navigation panel, select an endpoint you want to test. For example:

- Click **Data Definitions** -> `GET /definition/{type}` to view data schema properties.
- Click **Team** -> `GET /customer/{teamId}/team` to view team configuration.

The main pane will display the endpoint's parameter requirements, request headers, and expected response format.

### Step 4: Send a Test Request

1. Fill in any required path parameters (for example, enter `survey` for the `{type}` parameter).
2. Click the **Test Request** or **Send** button.
3. The interface will send the live HTTP request to `https://a11y-docs.web.app/api`.

### Step 5: Inspect the Response

The response area will display the server's output:

- **`200 OK`**: Success! The returned JSON payload contains the requested data.
- **`401 Unauthorized`**: Authentication failed. Verify that your API key was copied correctly and pasted into the authorization field.
- **`404 Not Found`**: The requested parameter value or path does not exist.

---

## Related Content

- [How to Manage Team API Keys](./manage-api-keys.md)
- [Team Settings Reference](../reference/team/api-keys.md)
- [Interactive API Reference (a11y-docs.web.app/api)](https://a11y-docs.web.app/api)
