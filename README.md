
# Help Center API and React Frontend

## Project Description

This project consists of a RESTful API and a React frontend for managing "Help Center" cards. The API allows users to create, retrieve, and manage help center cards, while the frontend provides a user interface to interact with these cards and includes search functionality.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/help-center-api-react-frontend.git
   cd help-center-api-react-frontend

2. Backend Setup:

-Navigate to the backend directory:
-cd backend

-Install dependencies:
-npm install

- Create a .env file in the backend directory with the following content:
- MONGODB_URI=your_mongodb_connection_string

- Start the server:
- npx nodemon server.js

3. Frontend Setup:
  cd ../frontend

-Install dependencies:
-npm install

-Start the React application:
-npm start

  The application will run at http://localhost:3000.

### API Endpoints to post data

   Create a Card:

  -Method: POST

  URL: http://localhost:5000/api/cards

  -Request Body:
 {
  "title": "Card Title",
  "description": "Card Description"
}

   -Get All Cards:

   -Method: GET
   URL: http://localhost:5000/api/cards
   -Get a Specific Card:

   -Method: GET
   URL: http://localhost:5000/api/cards/:title

# This `README.md` file provides a brief description of the project, detailed installation instructions for both the backend and frontend, and the API endpoints with methods and URLs.
