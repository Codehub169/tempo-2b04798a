#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

# Install dependencies
# Checks for package-lock.json first, then yarn.lock.
if [ -f package-lock.json ]; then
  echo "Found package-lock.json, installing dependencies with npm..."
  npm install --legacy-peer-deps
elif [ -f yarn.lock ]; then
  echo "Found yarn.lock, installing dependencies with yarn..."
  yarn install
else
  echo "No lock file (package-lock.json or yarn.lock) found. Assuming dependencies are managed elsewhere or not needed."
fi

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Start the Next.js application on port 9000
# Use exec to replace the shell process with the Node.js process.
# This ensures that signals are correctly passed to the application, which is good practice, especially in containerized environments.
echo "Starting Next.js application on port 9000..."
exec npm run start -- -p 9000
