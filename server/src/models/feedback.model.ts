import { Schema, model } from 'mongoose';

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },

    contactInfo: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
  },
  {
    timestamps: true,
  }
);

export const Feedback = model('Feedback', feedbackSchema);
