@echo off

echo Starting the Angular server.
start ng serve

echo Waiting for 5 seconds to ensure the Angular server is up and running.
timeout 5 > nul

echo Navigating to the backend directory and starting the Node.js server.
cd backend
node server.js
