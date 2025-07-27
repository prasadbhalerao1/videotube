### Project with youtube plus twitter like functionalities

# 🎥 Video Platform API

A **Node.js + Express + MongoDB (Mongoose)** backend for a video-sharing platform with features like **users, videos, comments, likes, playlists, subscriptions, and tweets**.

---

## ✅ Features
- User Authentication & Profile Management
- Video Upload & Management
- Comments on Videos
- Likes on Videos, Comments, Tweets
- Playlists for Users
- Subscriptions (Channels)
- Tweets (Micro-posts)
- Pagination using `mongoose-aggregate-paginate-v2`
- Environment-based Configuration

---

## 📂 Project Structure
.
├── node_modules/          # Installed dependencies
├── public/                # Static files (images, CSS, etc.)
├── src/                   # Main source code
│   ├── controllers/       # Handles request & response logic
│   │   └── healthcheck.controllers.js
│   ├── db/                # Database connection logic
│   │   └── index.js       # MongoDB connection setup
│   ├── middlewares/       # Custom Express middlewares
│   ├── models/            # Mongoose schemas & models
│   │   ├── comment.models.js
│   │   ├── like.models.js
│   │   ├── playlist.models.js
│   │   ├── subscription.models.js
│   │   ├── tweet.models.js
│   │   ├── user.models.js
│   │   └── video.models.js
│   ├── routes/            # Express routes
│   │   └── healthcheck.routes.js
│   └── utils/             # Helper functions & classes
│       ├── ApiError.js    # Custom error handling class
│       ├── ApiResponse.js # Standard API response format
│       └── asyncHandler.js# Async error wrapper for controllers
├── .env                   # Environment variables
├── .env.sample            # Sample env file for reference
├── app.js                 # Express app configuration
├── constants.js           # Application constants
├── index.js               # Application entry point
├── README.md              # Project documentation
├── .gitignore             # Files ignored by Git
├── .prettierrc            # Code formatting rules
├── .prettierignore        # Files ignored by Prettier
├── package.json           # Project metadata & dependencies
└── package-lock.json      # Dependency tree lock file


# When you build production grade websites its important to build the healthchecks. It just tells that everything is up and running 

# Its a common practice AWS or any such  clould providers they have auto load balancers which are depended on these healthchecks 

# Each model gets a controller and each controller gets a route
