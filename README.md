# NC Plus One - Frontend
This repo contains the front end for the NC Plus One Project - an events platform. An unauthenticated user can browse events, register and login. Once logged in, a user can RSVP, create and manage events. 
The backend can be found at: https://github.com/ameliapeters1/NC-Plus-One-Project
This application is built using React and TypeScript, with Vite as the development and build tool.

## Set up
1. Install Node.js and npm
2. Fork and clone this repository
3. Install dependencies:
  ```bash
    npm install
  ```
4. Create a .env file following .env.example for the required info
5. Start the backend server (in a different terminal, from the backend repository):
  ```bash
    uvicorn main:app --reload
  ```
6. Start the development server:
  ```bash
    npm run dev
  ```
7. Open the URL provided in the terminal to access the application locally
