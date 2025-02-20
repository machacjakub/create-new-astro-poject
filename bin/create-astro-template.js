#!/usr/bin/env node
import fs from "fs-extra"; // Import the default export
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const { copySync } = fs; // Destructure the function from the default import

// Get the directory of this script
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get the project name from the command line, default to "new-astro-project"
const projectName = process.argv[2] || "new-astro-project";
const targetPath = path.join(process.cwd(), projectName);
const templatePath = path.join(__dirname, "../template");

console.log(`🚀 Creating new Astro project: ${projectName}`);

// Copy the template files
copySync(templatePath, targetPath);

console.log("✅ Template copied successfully!");

// Initialize Git & install dependencies
execSync(`cd ${projectName} && git init && yarn install`, { stdio: "inherit" });

console.log(`🎉 Project setup complete! Now run: cd ${projectName} && yarn dev`);
