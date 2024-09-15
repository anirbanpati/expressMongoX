#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname and __filename in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = process.argv[2] || "my-new-app";  // Directory name from the command line argument

const templateDir = path.join(__dirname, '../template');  // Path to template directory

// Copy template files to the target directory
function copyFolderSync(from, to) {
  fs.mkdirSync(to, { recursive: true });

  fs.readdirSync(from).forEach((element) => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);

    if (fs.lstatSync(fromPath).isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else {
      copyFolderSync(fromPath, toPath);
    }
  });
}

// Create the project folder and copy the template
fs.mkdirSync(targetDir);
copyFolderSync(templateDir, targetDir);

console.log(`\nProject created in ${targetDir}!\n`);
