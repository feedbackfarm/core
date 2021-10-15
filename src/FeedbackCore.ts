const apiRoute = 'https://api.feedback.farm/addFeedback';

async function sendFeedback(projectId: string, feedback: string, identifier?: string) {
  return fetch(apiRoute, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ projectId, feedback, identifier }),
  });
}

export { sendFeedback };
