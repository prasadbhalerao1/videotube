/* 
  owner ObjectId users
  videoFile string
  thumbnail string
  title string
  description string
  duration number
  views number
  isPublished boolean
  createdAt Date
  updatedAt Date
*/

import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // CLOUDINARY URL
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);

/*

The aggregate pipeline in Mongoose is a way to process your data in steps, like a factory line. Each step (or "stage") takes the data, does something with it, and then sends it to the next step. This lets you filter, group, sort, or change the structure of your data.

For example, imagine you have many video documents, and you want to count how many videos are in each category. You could use an aggregate pipeline with two steps:

Match: Filter videos that meet a condition (like only public videos).
Group: Group the videos by their category and count them.
Here's an example with plain JavaScript using Mongoose's aggregate method:

-->

// ...existing code...
Video.aggregate([
    // Step 1: Filter videos (for example, only those marked as public)
    { $match: { isPublic: true } },

    // Step 2: Group videos by the "category" field and count them
    { $group: {
        _id: "$category", // Group key: the category of the video
        count: { $sum: 1 } // For each video, add 1 to the count
    } }
])
.then(results => {
    console.log("Videos grouped by category:", results);
})
.catch(error => {
    console.error("Error in aggregation:", error);
});
// ...existing code...

<--

In this simple example:

The $match stage filters the documents to those where isPublic is true.
The $group stage groups the remaining videos by their category field (the _id in the output is the category) and counts each document.


The aggregate pipeline is very powerful and flexible. You can add more stages if you need to perform additional transformations, like sorting the results, projecting specific fields, or limiting the output.

This pattern is common in many projects using JavaScript and npm with Mongoose, allowing you to analyze and reshape data from your MongoDB database easily.


*/
