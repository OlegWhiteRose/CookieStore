import { Schema, model } from 'mongoose';

const statSchema = new Schema(
  {
    number: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    statType: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  }
);

export const Stat = model("Stat", statSchema);

