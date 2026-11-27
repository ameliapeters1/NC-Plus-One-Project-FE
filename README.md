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

## Features Implemented
### User features:
* browse events without logging in
* register a new account
* login to an existing account
* view individual event details
* RSVP to events when logged in
* view events they have RSVPed to in their account
### Organiser features:
* create new events
* edit existing events
* view information about event attendees
* view events they have organised

# API changes
Some backend changes were made to support front end development:
* CORS support was added to allow the front end to communicate with the backend from a different origin
* the login endpoint was updated to return the user's name and id to allow the front end to identify the authenticated user and display relevant info
* the endpoints to retrieve all and individual events were updated to include organiser ID to support event ownership on the front end
* a user rsvp endpoint was added to retrieve all events the user has RSVPed to
* a organiser attendee endpoint was added to allow organisers to get information on users who had RSVPed to their event

# Known issues
* authentication needs improvement to handle expired tokens in a better manner

# Future implementations
With more time, I would:
* add testing to all components and utility functions
* refactor login and register pages to have form components
* check an authenticated user's token has not expired and redirect them to login when necessary
* allow deletion of an event
* add back buttons on individual event pages to make returning to the main event list easier 
* continue refining the user experience and design to ensure consistency and intuitive navigation throughout

# Demo Account
To explore an authenticated user's experience without registering, demo details are:
* email: bob@example.com
* password: password123