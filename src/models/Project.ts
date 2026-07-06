import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    imageUrl: {
      type: String,
      required: [true, "Please provide an image url"],
    },
    url: {
      type: String,
      required: [true, "Please provide a project url"],
    },
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
