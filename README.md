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


**nodemon**: automatically restarts your Node.js server when code changes
Example (in `package.json` scripts):

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

Then run:

```
npm run dev
```

**prettier**: formats your code to a consistent style
Example (format all files):

```
npx prettier --write .
```

Or add to `package.json`:

```json
"scripts": {
  "format": "prettier --write \"src/**/*.js\""
}
```
**bcrypt**: hashes and compares passwords securely
Example:

```js
import bcrypt from "bcrypt";

const saltRounds = 10;
const password = "userPassword123";

// Hashing
const hash = await bcrypt.hash(password, saltRounds);

// Later, comparing
const isMatch = await bcrypt.compare("userPassword123", hash);
```
**cloudinary**: uploads and manages images/videos on Cloudinary CDN
Example:

```js
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const result = await cloudinary.uploader.upload("path/to/file.jpg");
console.log(result.secure_url);
```

**cookie‑parser**: parses cookies from incoming HTTP requests
Example:

```js
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

// In a route:
app.get("/", (req, res) => {
  console.log(req.cookies); 
  res.send("Cookies logged");
});
```

**cors**: enables/disables cross‑origin requests for your API
Example (allow a specific origin):

```js
import cors from "cors";
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
```

**dotenv**: loads environment variables from a `.env` file
Example (at the very top of your entry file):

```js
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.MONGO_URI);
```

**express**: minimalist web framework for routing and middleware
Example:

```js
import express from "express";
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

**jsonwebtoken**: creates and verifies JWTs for auth
Example (signing and verifying):

```js
import jwt from "jsonwebtoken";

const token = jwt.sign({ userId: 123 }, process.env.JWT_SECRET, { expiresIn: "1h" });

try {
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  console.log(payload.userId);
} catch (err) {
  console.error("Invalid token");
}
```

**mongoose**: schema‑based MongoDB ODM for models and queries
Example:

```js
import mongoose from "mongoose";

await mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", userSchema);

const newUser = await User.create({ name: "Prasad", email: "p@example.com" });
```

**mongoose‑aggregate‑paginate‑v2**: adds pagination to Mongoose aggregate pipelines
Example:

```js
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

userSchema.plugin(mongooseAggregatePaginate);
const User = mongoose.model("User", userSchema);

const aggregate = User.aggregate([{ $match: { active: true } }]);
const options = { page: 1, limit: 10 };

const result = await User.aggregatePaginate(aggregate, options);
console.log(result.docs, result.totalPages);
```

**multer**: handles file uploads (`multipart/form-data`) in Express
Example:

```js
import multer from "multer";

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("avatar"), (req, res) => {
  console.log(req.file); // file info
  res.send("Upload successful");
});
```


### When you build production grade websites its important to build the healthchecks. It just tells that everything is up and running 

### Its a common practice AWS or any such  clould providers they have auto load balancers which are depended on these healthchecks 

### Each model gets a controller and each controller gets a route
