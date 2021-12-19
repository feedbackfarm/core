const apiRoute = 'https://api.feedback.farm/api/feedbacks/add';
type FeedbackType = 'BUG' | 'FEATURE' | 'OTHER';

async function sendFeedback(
  projectId: string,
  feedback: string,
  type: FeedbackType,
  identifier?: string,
  pageName?: string,
) {
  return fetch(apiRoute, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ projectId, feedback, type, identifier, pageName }),
  });
}

export { sendFeedback };
