const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'js');
const distDir = path.join(rootDir, 'dist');
const targetDir = path.join(distDir, 'js');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;

  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const sourcePath = path.join(src, entry.name);
    const targetPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

if (!fs.existsSync(distDir)) {
  throw new Error(`Le dossier dist est introuvable: ${distDir}`);
}

copyRecursive(sourceDir, targetDir);
