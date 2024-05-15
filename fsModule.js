const fs = require("fs/promises");
const path = require("path");

const createFolder = async () => {
  try {
    await fs.mkdir(path.join(__dirname, "myNotes"));
    console.log("Folder was created...");
  } catch (error) {
    console.log(error);
  }
};

// createFolder();
const writeFile = async () => {
  try {
    await fs.writeFile(
      path.join(__dirname, "myNotes", "daily.txt"),
      "Created folder and file, the file named by Daily in txt format"
    );
    console.log("Write a new data to the file");
  } catch (error) {
    console.log(error);
  }
};

const readFile = async () => {
  const pathMyFolder = path.join(__dirname, "myNotes", "daily.txt");
  try {
    const data = await fs.readFile(pathMyFolder, "utf8");
    console.log("Read all data in My Notes folder");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const addData = async () => {
  const pathMyFolder1 = path.join(__dirname, "myNotes", "daily.txt");
  try {
    await fs.appendFile(pathMyFolder1,' whala whala bla bla bla bla')
  } catch (error) {
    console.log(error);
    
  }
}

writeFile();
addData()
readFile();
