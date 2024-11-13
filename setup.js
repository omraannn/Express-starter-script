#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const {
    createDirectory,
    writeFile,
    executeCommand
} = require('./utils/fileUtils');
const {
    generateEnvContent,
    generateDbContent,
    generateModelContent,
    generateControllerContent,
    generateRouteContent,
    generateServerContent
} = require('./utils/templates');

/**
 * Project setup script for an Express application with MongoDB.
 * This script helps create a new Node.js project with the essential configuration,
 * installs required dependencies, and generates basic files and folders for the project.
 *
 * Usage:
 * 1. Clone or download this `setup-project.js` file into your working directory.
 * 2. Run it using the following command:
 *    `node setup-project.js <project_name>`
 *    (If no project name is provided, 'my-express-project' will be used as the default).
 *
 * What this script does:
 * - Creates a project directory.
 * - Initializes a Node.js project using `npm init`.
 * - Installs necessary dependencies (Express, MongoDB, etc.).
 * - Creates essential folders and files for the project structure.
 * - Configures the `package.json` scripts for easy startup with `nodemon`.
 * - Starts the server automatically using `nodemon` for development convenience.
 *
 * Warning: Ensure that Node.js and npm are installed on your machine before running this script.
 *
 * Author: [DEKHIL_Omran]
 * Date: [13-11-2024]
 */

/* --------------------------------------------------------------
| Main function to set up the project
| ---------------------------------------------------------------*/
function setupProject(projectName) {
    const projectPath = path.join(process.cwd(), projectName);

    /* --------------------------------------------------------------
    | Check if the directory already exists
    | ---------------------------------------------------------------*/
    if (fs.existsSync(projectPath)) {
        console.log(`The directory '${projectName}' already exists. Aborting project creation.`);
        return;
    }

    /* --------------------------------------------------------------
    | Create the project directory
    | ---------------------------------------------------------------*/
    console.log(`Creating the directory '${projectName}'`);
    createDirectory(projectPath);
    process.chdir(projectPath);

    /* --------------------------------------------------------------
    | Initialize the Node.js project
    | ---------------------------------------------------------------*/
    executeCommand('npm init -y');


    /* --------------------------------------------------------------
    | Install required dependencies
    | ---------------------------------------------------------------*/
    executeCommand('npm install express mongoose dotenv cors body-parser');
    executeCommand('npm install --save-dev nodemon');

    /* --------------------------------------------------------------
    | Create the necessary folders
    | ---------------------------------------------------------------*/
    ['config', 'controllers', 'models', 'routes'].forEach(createDirectory);

    /* --------------------------------------------------------------
    | Generate and write the files
    | ---------------------------------------------------------------*/
    writeFile(path.join(projectPath, '.env'), generateEnvContent(projectName));
    writeFile(path.join(projectPath, 'config', 'db.js'), generateDbContent());
    writeFile(path.join(projectPath, 'models', 'UserModel.js'), generateModelContent());
    writeFile(path.join(projectPath, 'controllers', 'userController.js'), generateControllerContent());
    writeFile(path.join(projectPath, 'routes', 'userRoute.js'), generateRouteContent());
    writeFile(path.join(projectPath, 'server.js'), generateServerContent());

    /* --------------------------------------------------------------
    | Add scripts to package.json
    | ---------------------------------------------------------------*/
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    packageJson.scripts = {
        start: 'node server.js',
        dev: 'nodemon server.js',
    };
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

    /* --------------------------------------------------------------
    | Start the application using nodemon
    | ---------------------------------------------------------------*/
    console.log('Starting the application with nodemon...');
    executeCommand('npm run dev');

    console.log(`The Express project with MongoDB has been successfully created in the '${projectName}' directory.`);
}

/* --------------------------------------------------------------
| Call the function with the project name
| ---------------------------------------------------------------*/
const projectName = process.argv[2] || 'my-express-project';
setupProject(projectName);