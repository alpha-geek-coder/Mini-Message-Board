# Mini Message Board

This repository contains a simple, dynamic message board application built with Node.js, Express, and the EJS templating engine. It allows users to view a list of messages and post their own. The application uses an in-memory array as a temporary database.

## Features

*   **View All Messages**: A home page that displays all submitted messages.
*   **Post a New Message**: A form to add a new message with a user name and text.
*   **View Message Details**: Click on a message to see its details, including the user, text, and date added.
*   **Responsive Design**: A clean, responsive layout styled with custom CSS.

## Tech Stack

*   **Backend**: Node.js, Express.js
*   **Frontend**: EJS (Embedded JavaScript templates), CSS3
*   **Development**: nodemon for automatic server restarts

## Project Structure

The project is organized into a clear, modular structure:

```
.
├── package.json        # Project metadata and dependencies
├── public/
│   └── style.css       # All custom styles for the application
├── server/
│   ├── app.js          # Main application file: server setup, middleware, and routing
│   ├── db.js           # In-memory data store for messages
│   ├── controllers/    # Handles the logic for requests and responses
│   └── routes/         # Defines the application's API endpoints
└── views/
    ├── *.ejs           # EJS templates for rendering HTML pages
    └── partials/       # Reusable EJS partials (head, navbar)
```

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

*   Node.js and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/alpha-geek-coder/Mini-Message-Board.git
    cd Mini-Message-Board
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Start the server:**
    The server uses `nodemon` for development, which will automatically restart the server when file changes are detected.
    ```sh
    npm start
    ```

4.  **Open your browser** and navigate to `http://localhost:3000`.

## Routes

The application exposes the following routes:

| Method | Route                | Description                                           | View Rendered      |
|--------|----------------------|-------------------------------------------------------|--------------------|
| `GET`  | `/` or `/index.html` | Displays the home page with a list of all messages.   | `views/index.ejs`  |
| `GET`  | `/message/new`       | Displays the form for creating a new message.         | `views/new.ejs`    |
| `POST` | `/message/new`       | Submits a new message and redirects to the home page. | (redirects)        |
| `GET`  | `/message/:index`    | Displays the details of a specific message.           | `views/details.ejs`|