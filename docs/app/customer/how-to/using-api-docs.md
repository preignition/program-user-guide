---
description: How to authenticate with your team API key and test live endpoints in the interactive API reference.
---

# How to Use the Interactive API Documentation

Whether you are a developer integrating custom software or a team member exploring available services, our **Interactive API Reference** lets you inspect and test live endpoints directly from your browser.

This guide assumes you know what an API and an API key are; if you do not, read [Understanding the Platform API](../explanation/understanding-the-platform-api.md) first. It then shows how to authenticate and test endpoints with your team API key.

---

## Before you start

- You have a **team API key**. If not, see [How to Manage Team API Keys](./manage-api-keys.md).
- You know which team the key belongs to; the reference acts as that team.
- For the concepts behind endpoints, keys and OpenAPI, read [Understanding the Platform API](../explanation/understanding-the-platform-api.md).

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
- [Understanding the Platform API](../explanation/understanding-the-platform-api.md)
- [Team Settings Reference](../reference/team/api-keys.md)
- [Interactive API Reference (a11y-docs.web.app/api)](https://a11y-docs.web.app/api)
