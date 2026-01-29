import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      maxlength: 255,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    inn: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = model("Contact", contactSchema);

