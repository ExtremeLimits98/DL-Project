const fs = require('fs');
const path = require('path');

// Set the path to your dist folder
const distPath = path.join(__dirname, 'dist', 'app', 'browser');

// Function to rename files based on a pattern
const renameFiles = (pattern, newName) => {
  fs.readdir(distPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    // Find files that match the pattern
    const matchedFiles = files.filter(file => file.match(pattern));
    
    // Rename each matched file
    matchedFiles.forEach(file => {
      const newFilePath = path.join(distPath, newName);
      fs.rename(
        path.join(distPath, file),
        newFilePath,
        (err) => {
          if (err) {
            console.error(`Error renaming ${file}:`, err);
          } else {
            console.log(`${file} renamed to ${newName} successfully!`);
          }
        }
      );
    });
  });
};

// Rename JavaScript and CSS files
renameFiles(/main-[A-Z0-9]+\.js$/, 'main.js'); // Rename main.js
renameFiles(/polyfills-[A-Z0-9]+\.js$/, 'polyfills.js'); // Rename polyfills.js
renameFiles(/styles-[A-Z0-9]+\.css$/, 'styles.css'); // Rename styles.css
