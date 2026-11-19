---
description: How to configure survey webhooks, choose triggers, verify the secret token, send test events, and check delivery history.
---

# How to Set Up Webhooks

Webhooks send an HTTP `POST` with a JSON payload to your endpoint when a respondent starts or submits a survey, or refuses its terms. Use them to feed a CRM, a data warehouse or a notification service without polling.

Webhooks are an **Advanced Mode** tool: open **Share → Webhook** with Advanced Mode on.

## Step 1: Add a webhook

1. Open **Share → Webhook**.
2. Select **Add Webhook**.
3. On the **Settings** tab, fill in:
   - **Name**: a descriptive label, for example `CRM intake`.
   - **Payload URL**: the `https` endpoint that will receive the events.
   - **Secret Token**: an optional shared secret (see Step 3).
4. Choose at least one **Trigger**:

| Trigger | Fires when |
| --- | --- |
| `survey.start` | A respondent begins a survey session. |
| `survey.submit` | A respondent submits their responses. |
| `survey.terms.refused` | A respondent declines the required survey terms. |

1. Leave **Active** on, or turn it off to keep the configuration without dispatching.

## Step 2: Understand the request

Each delivery is a `POST` with `Content-Type: application/json` and a `User-Agent` of `AccessibleData-Webhook/1.0`. The payload identifies the event, the survey and the session:

```json
{
  "event": "survey.submit",
  "timestamp": "<server timestamp>",
  "surveyId": "<survey id>",
  "isTest": false,
  "context": {
    "actorId": "...",
    "formActorId": "...",
    "buid": "...",
    "uid": "...",
    "campaign": "...",
    "source": "..."
  }
}
```

The request times out after **10 seconds**. Respond quickly with a `2xx` status; do slow work asynchronously after acknowledging. A non-`2xx` response is recorded as a failed delivery and is not retried automatically.

## Step 3: Verify the secret token

If you set a **Secret Token**, every request carries it in the `X-A11y-Token` header. On your server:

1. Read `X-A11y-Token`.
2. Compare it with the configured secret using a constant-time comparison.
3. Reject the request with `401` when it does not match.

Because the header is sent as-is rather than signed, use HTTPS and keep the secret out of client-side code. Rotate the secret by updating the webhook and your server together.

## Step 4: Send a test event

1. Open the webhook's **Test** tab.
2. Select **Send Survey Start Event**, **Send Survey Submit Event** or **Send Terms Refused Event**.
3. Read the result:
   - **HTTP status** (for example `200 OK` or `500 Internal Server Error`),
   - **response time** in milliseconds,
   - **response body** returned by your server.

A test uses the same request shape but does not create a respondent session or a real survey event.

## Step 5: Check deliveries

Open the **Events** tab for the delivery audit: timestamp, trigger, delivery status and payload for each attempt. Use it to diagnose an endpoint that intermittently fails or a trigger that never fires.

## Troubleshooting

- **No event arrives**: confirm the webhook is active, the trigger is selected, and the survey was published after the webhook was configured. Test submissions do not dispatch live events.
- **The request times out**: your endpoint took longer than 10 seconds. Acknowledge first, then process.
- **`401` from your server**: the secret token differs. Update both sides.
- **Duplicate work**: a respondent can start more than once; treat `survey.start` as idempotent keyed by `actorId`.
- **Terms refusals are not reported**: check that the survey actually requires terms; the trigger only fires when a respondent declines them.

## Related Content

- [Survey Webhooks Reference](../reference/share/webhook/index.md): Settings, test and event tabs in detail.
- [Platform API Reference](/api.html): OpenAPI endpoints for survey data.
- [How to Set Survey Terms](./survey-terms.md): Making the terms refusal event possible.
- [How to Publish and Distribute a Survey](./publishing-a-survey.md): Publishing the survey the webhook listens to.
