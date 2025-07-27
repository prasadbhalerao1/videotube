### Project with YouTube plus Twitter like functionalities

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
📦 **video-platform-api**
- 📁 **node_modules/** – Installed dependencies
- 📁 **public/** – Static assets
- 📁 **src/**
  - 📁 controllers/ – Handles route logic
  - 📁 db/ – Database connection
  - 📁 middlewares/ – Express middlewares
  - 📁 models/ – Mongoose schemas & models
  - 📁 routes/ – API routes
  - 📁 utils/ – Utility classes & helpers
- ⚙️ **.env** – Environment variables
- 🛠 **app.js** – Express app config
- 🚀 **index.js** – App entry point
- 📝 **README.md** – Documentation
- 📄 **.gitignore** – Git ignore rules
- 🎨 **.prettierrc** – Prettier config
- 📦 **package.json** – Dependencies & scripts



# When you build production grade websites its important to build the healthchecks. It just tells that everything is up and running 

# Its a common practice AWS or any such  clould providers they have auto load balancers which are depended on these healthchecks 

# Each model gets a controller and each controller gets a route
