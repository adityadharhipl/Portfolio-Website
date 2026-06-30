import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICV extends Document {
  url: string;
  updatedAt: Date;
}

const CVSchema: Schema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent mongoose from recreating the model if it already exists
export const CV: Model<ICV> = mongoose.models.CV || mongoose.model<ICV>("CV", CVSchema);
