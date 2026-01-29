import { Schema, model } from 'mongoose';

const orderItemSchema = new Schema({
  cookieId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const orderSchema = new Schema(
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
      trim: true,
      maxlength: 255,
    },

    city: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },

    postalCode: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },

    street: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },

    house: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    building: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    apartment: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    comment: {
      type: String,
      trim: true,
      maxlength: 1000,
    },

    items: {
      type: [orderItemSchema],
      required: true,
      validate: {
        validator: (items: any[]) => items.length > 0,
        message: 'Order must contain at least one item',
      },
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ['pending', 'confirmed', 'delivered', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model('Order', orderSchema);
