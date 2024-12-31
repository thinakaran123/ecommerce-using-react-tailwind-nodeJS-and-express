# E-Commerce Site

This is an e-commerce site built using **React**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB**. The project includes a responsive user interface with a modern design and integrates a backend API to handle product management, user authentication, and order processing. Toast notifications are used for providing feedback to users.

## Features

- **Frontend**:
  - Built with **React** for a dynamic and responsive user experience.
  - Styled using **Tailwind CSS** for easy and customizable styling.
  - Includes interactive toast notifications for feedback using **react-toastify**.
  - User authentication with JWT (JSON Web Token).
  - Product listing, cart management, and checkout functionality.
  
- **Backend**:
  - API built with **Node.js** and **Express**.
  - MongoDB used for data storage (products, users, orders, etc.).
  - Includes routes for product management, user registration, login, and order processing.

- **Libraries & Tools**:
  - **react-toastify** for toast notifications.
  - **MongoDB** for database storage.
  - **Express** for backend API.

## Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS
  - react-toastify

- **Backend**:
  - Node.js
  - Express
  - MongoDB (with Mongoose)

## Installation

### **Frontend (React) Setup**

1. Navigate to the `front_end/` directory:

   ```bash
   cd front_end
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend should now be running at `http://localhost:3000`.

### **Backend (Node.js/Express) Setup**

1. Navigate to the `backend/` directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/` directory and add your MongoDB URI:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The backend should now be running at `http://localhost:5000`.

## Usage

1. **Frontend**: The React app communicates with the backend API to fetch product data, handle user authentication, manage the shopping cart, and process orders.
2. **Backend**: The Express API handles routes for managing products, user registration/login, and order management.

### **Endpoints**

#### **GET /api/v1/products**
- Fetch a list of all products.

#### **POST /api/orders**
- Place a new order.

## Contribution

Feel free to fork this project and make changes. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new Pull Request.


## Acknowledgements

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework.
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database used to store application data.
- **react-toastify**: A library for toast notifications in React.
