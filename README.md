# @feedbackfarm/core

[Feedback.farm](https://feedback.farm) core api

This small package allow you to call the [Feedback.farm](https://feedback.farm) api from your custom UI.

# Demos

- [Code Sandbox](https://codesandbox.io/s/feedbackfarm-core-2lkn0?file=/src/App.js)

# Usage

1. Create a project on the [feedback.farm](https://feedback.farm) platform and then grab the project id.

2. `npm install @feedbackfarm/core`

3. Insert the following snippet

```
// index.jsx
import { seendFeedback } from "@feedbackfarm/core";

async function handleSubmitFeedback() {
    const result = await sendFeedback(
        projectId,
        feedbackText,
        identifier,
        pageName
    );
}
```

### Parameters

| Parameters     |         Type          | Description                                                             | Required |
| -------------- | :-------------------: | :---------------------------------------------------------------------- | :------: |
| `projectId`    |        string         | Project identifier available on [feedback.farm](feedback.farm) platform |    ✅    |
| `feedbackText` |        string         | User feedback                                                           |    ✅    |
| `type`         | BUG ; FEATURE ; OTHER | Feedback type                                                           |    ✅    |
| `identifier`   |        string         | User identifier (email, id, ...)                                        |          |
| `pageName`     |        string         | Page name / page url                                                    |          |

Full [documentation](https://www.notion.so/Build-Your-Own-Widget-fb729b98e1694d7c8bc019b4d19622c9)
