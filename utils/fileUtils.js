const fs = require('fs');
const { execSync } = require('child_process');

/* --------------------------------------------------------------
| Function to create a directory if it doesn't already exist.
| @param {string} dir - The path to the directory to create.
| ---------------------------------------------------------------*/
function createDirectory(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

/* --------------------------------------------------------------
| Function to write content to a file.
| @param {string} filePath - The path of the file to create or write to.
| @param {string} content - The content to write to the file.
| ---------------------------------------------------------------*/
function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`File created : ${filePath}`);
}

/* --------------------------------------------------------------
| Function to execute a command in the terminal/command prompt.
| @param {string} command - The terminal command to execute.
| ---------------------------------------------------------------*/
function executeCommand(command) {
    try {
        console.log(`Executing command: ${command}`);
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error('Error executing the command:', error.message);
        process.exit(1);
    }
}

module.exports = {
    createDirectory,
    writeFile,
    executeCommand,
};
