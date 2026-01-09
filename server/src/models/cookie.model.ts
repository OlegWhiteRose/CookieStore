import { Schema, model } from 'mongoose';

export enum CookieFormat {
  COMMON = "common",
  SPECIAL = "special",
}

const cookieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    format: {
      type: String,
      enum: Object.values(CookieFormat),
      required: true,
    },

    type: {
      type: String,
      required: true,
      trim: true,
    },

    imgUrl: {
      type: String,
    },

    description: {
      type: String,
    },

    ingredients: {
      type: String,
    },

    address: {
      type: String,
    },

    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Cookie = model("Cookie", cookieSchema);

