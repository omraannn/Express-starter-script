/* --------------------------------------------------------------
| Function to generate the content for the .env file.
| @param {string} projectName
| @returns {string} - The content of the .env.
----------------------------------------------------------------*/
function generateEnvContent(projectName) {
    return `MONGODB_URI=mongodb://localhost:27017/${projectName}
PORT=5000`;
}

/* --------------------------------------------------------------
| Function to generate the content for the db.js file.
| @returns {string} - The content of the db.js.
----------------------------------------------------------------*/
function generateDbContent() {
    return `const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB connecté');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;`;
}

/* --------------------------------------------------------------
| Function to generate the content for the UserModel.js file.
| @returns {string} - The content of the UserModel.js.
----------------------------------------------------------------*/
function generateModelContent() {
    return `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;`;
}

/* --------------------------------------------------------------
| Function to generate the content for the userController.js file.
| @returns {string} - The content of the userController.js
----------------------------------------------------------------*/
function generateControllerContent() {
    return `const UserModel = require('../models/UserModel');

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUsers
};`;
}

/* --------------------------------------------------------------
| Function to generate the content for the userRoute.js file.
| @returns {string} - The content of the userRoute.js.
----------------------------------------------------------------*/
function generateRouteContent() {
    return `const express = require('express');
const { getUsers } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);

module.exports = router;`;
}

/* --------------------------------------------------------------
| Function to generate the content for the server.js file.
| @returns {string} - The content of the server.js.
----------------------------------------------------------------*/
function generateServerContent() {
    return `const express = require('express');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoute');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

connectDB();

// Middleware
app.use(cors());  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoute);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(\`Serveur démarré sur le port \${port}\`);
});`;
}

module.exports = {
    generateEnvContent,
    generateDbContent,
    generateModelContent,
    generateControllerContent,
    generateRouteContent,
    generateServerContent
};