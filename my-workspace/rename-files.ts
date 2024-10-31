const fs = require('fs');
const path = require('path');

// Set the path to your dist folder
const distPath = path.join(__dirname, 'dist', 'app', 'browser');

// Function to rename files
const renameJsFiles = () => {
  // Rename main.js to app.bundle.js
  fs.rename(
    path.join(distPath, 'main-KD7NPSAN.js'),  // Original file name
    path.join(distPath, 'main.js'),  // New file name
    (err) => {
      if (err) {
        console.error('Error renaming main.js:', err);
      } else {
        console.log('main.js renamed to app.bundle.js successfully!');
      }
    }
  );
};
  const renamePolyFiles = () => {
    // Rename main.js to app.bundle.js
    fs.rename(
      path.join(distPath, 'polyfills-FFHMD2TL.js'),  // Original file name
      path.join(distPath, 'polyfills.js'),  // New file name
      (err) => {
        if (err) {
          console.error('Error renaming polyfills.js:', err);
        } else {
          console.log('polyfills.js renamed to app.bundle.js successfully!');
        }
      }
    );
};

const renamecss = () => {
    // Rename main.js to app.bundle.js
    fs.rename(
      path.join(distPath, 'styles-X2EKNRCY.css'),  // Original file name
      path.join(distPath, 'styles.css'),  // New file name
      (err) => {
        if (err) {
          console.error('Error renaming styles.css:', err);
        } else {
          console.log('styles.css renamed to app.bundle.css successfully!');
        }
      }
    );
};
  // Rename other files if needed
  // Add more fs.rename calls as required

// Execute the renaming function
renameJsFiles();
renamePolyFiles();
renamecss();
