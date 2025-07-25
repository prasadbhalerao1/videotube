//   id string pk mongodb automatically adds _id field to every single document so we don't have to worry about that 
//   username string
//   email string
//   fullName string
//   avatar string
//   coverImage string
//   watchHistory ObjectId[] videos
//   password string
//   refreshToken string
//   createdAt Date
//   updatedAt Date

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        // username: String,
        // email: String
        username: {
            type: String,
            required: true
        }
    }
)

export const User = mongoose.model("User", userSchema)
