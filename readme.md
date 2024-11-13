# 🚀 EXPRESS STARTER SCRIPT

[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github)](https://github.com/omraannn)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/dekhilomran/)

This script is used to quickly set up a Node.js project with **Express** and **MongoDB**. It will create a new project directory, initialize the project with `npm`, install necessary dependencies, and set up basic files and structure for an Express app that connects to MongoDB.

## 📑 Table of Contents
- [How to Use](#-how-to-use)
- [What This Script Does](#-what-this-script-does)
- [Requirements](#-requirements)
- [Folder Structure](#-folder-structure)
- [Customization](#-customization)
- [Contribute](#-contribute)
- [Author](#-author)
- [License](#-license)

## ✅ How to Use:

1. Run the script using the following command:

   ```bash
   npx express-starter-script [Project name]
   ```

   or

   ```bash
   npx git@github.com:omraannn/Express-starter-script.git [Project name]
   ```

   or

   ```bash
   npx https://www.npmjs.com/package/express-starter-script [Project name]
   ```

   📝 **Note**: (If no project name is provided, it will default to `my-express-project`.)

## 💡 What This Script Does:

- **Creates a new project directory** with the specified name.
- **Initializes** a new Node.js project using `npm init`.
- **Installs required dependencies**:
    - **Express**, **MongoDB**, **dotenv**, **CORS**, **body-parser**, **mongoose**.
- **Adds `nodemon`** as a development dependency for hot-reloading.
- **Sets up folders** for core components:
    - `config/` - Configuration files
    - `controllers/` - Controllers for request handling
    - `models/` - Mongoose models
    - `routes/` - Route definitions
- **Generates configuration files**:
    - `.env` for environment variables
    - `db.js` - MongoDB connection configuration
    - `UserModel.js` - Mongoose model for User
    - `userController.js` - Basic user controller
    - `userRoute.js` - Routes for the user
    - `server.js` - Main entry point for the app
- Adds start and dev scripts to `package.json` for running with **nodemon**.

---

## 🔧 Requirements:

- Make sure you have **Node.js** and **npm** installed on your system.
- MongoDB should be set up and running, or you can use a cloud service like MongoDB Atlas.
- You need to create your database first (the script will connect using the project name as the database name, but you can change this later).

---

## 📂 Folder Structure:

The script will generate the following structure:

```
my-express-project/
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── models/
│   └── UserModel.js
├── routes/
│   └── userRoute.js
├── .env
├── server.js
├── package.json
└── node_modules/
```

--- 

## 🛠️ Customization:

- You can modify the generated files (such as `UserModel.js`, `userController.js`, and `userRoute.js`) to fit your application’s needs.
- Update the `.env` file with your MongoDB connection string (`MONGODB_URI`).
- You can add additional routes, controllers, and models as required.

--- 

## 🤝 Contribute:

If you’d like to contribute to this project, please fork the repository and submit a pull request. Your contributions, whether bug fixes, enhancements, or documentation updates, are always welcome!

1. Fork the Project.
2. Create your Feature Branch: `git checkout -b feature/YourFeature`.
3. Commit your Changes: `git commit -m 'Add some feature'`.
4. Push to the Branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.

---

## 🧑‍💻 Author:

This script was created with ❤ by **[DEKHIL_Omran]**.

---

## 📜 License:

This project is available under the MIT License.
