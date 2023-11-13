# React PostgreSQL Blog Project

Welcome to the React PostgreSQL Blog project! This project is a full-stack web application that utilizes React for the frontend, PostgreSQL for the backend database, and a combination of controllers and routes to handle the backend logic. The frontend is styled using React Bootstrap for a clean and responsive user interface. 

## Project Structure

The project is organized into two main folders: `frontend` and `backend`.

### Frontend

The `frontend` folder contains all the files related to the React application. Here's a brief overview of the important directories and files:

- **src/components**: This directory contains React components used to build the user interface. You'll find separate components for different parts of the application, such as header, post list, post detail, etc.

- **src/pages**: The pages directory contains the main pages of the application, such as Home, Blog Post, Create Post, etc.

- **src/App.jsx**: The main entry point of the React application.

- **public**: Static assets and the HTML template file reside in the public directory.

### Backend

The `backend` folder contains all the server-side logic, including controllers, routes, and the database connection. Here's a breakdown of the key directories and files:

- **controllers**: This directory holds the controller functions responsible for handling various requests. For example, there might be controllers for creating a blog post, fetching all posts, etc.

- **routes**: The routes directory contains the API routes. Each route is associated with a specific controller function.


- **server.js**: This file is the entry point for the backend server. It initializes the server, sets up middleware, and defines the API routes.

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
    git clone https://github.com/KingLyrics/ReactPostgresql.git
   ```

2. **Install dependencies:**

   ```bash
   # Navigate to the frontend folder
   cd react-postgresql-blog/frontend
   npm install

   # Navigate to the backend folder
   cd ../backend
   npm install
   ```

3. **Set up the database:**

   Create a PostgreSQL database and update the connection details in the `backend/controllers/blogController.js` file.

4. **Run the project:**

   ```bash
   # In the frontend folder
   npm run dev

   # In the backend folder
   npm start
   ```

   The React application will be accessible at `http://localhost:3000`, and the backend server will be running at `http://localhost:5000`.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. Your feedback and contributions are highly appreciated!

Happy coding!
