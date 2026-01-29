export interface Feedback {
  name: string;
  contactInfo: string;
  message: string;
}

export interface FeedbackResponse {
  status: 'ok';
  data: {
    _id: string;
    name: string;
    contactInfo: string;
    message: string;
    createdAt: string;
  };
}
