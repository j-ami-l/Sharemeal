# ShareBite: Community Food Sharing Platform

[](https://sharemeal.vercel.app)

## 🌟 Project Overview

**ShareBite** is a community-driven web platform designed to combat food waste by connecting those with surplus food to those in need. This full-stack application provides a user-friendly interface for managing food donations and requests, fostering a more sustainable and compassionate community.

-----

## 🚀 Key Features

  * **Full CRUD Operations:** Users can create, read, update, and delete food listings.
  * **JWT Authentication:** Secure authentication system using JSON Web Tokens (JWT) protects private routes and ensures a seamless login experience.
  * **Firebase Authentication:** Implemented both email/password-based authentication and social login (Google/GitHub) for user convenience.
  * **Food Request System:** Logged-in users can request available food items. Once a food is requested, its status changes to "requested," making it unavailable to others. Users can manage their food requests on a dedicated page.
  * **Dynamic Filtering and Sorting:** On the **Available Foods** page, users can search for food items by name and sort them by expiration date.
  * **Layout Toggle:** The **Available Foods** page features a button to toggle between a 3-column and 2-column grid layout for a personalized viewing experience.
  * **TanStack Query:** Implemented for efficient and robust API data fetching and state management.
  * **Framer Motion Animations:** The homepage incorporates subtle and engaging animations from the Framer Motion library.
  * **Environment Variable Security:** All sensitive configuration keys for Firebase and MongoDB are securely stored using environment variables.

### **How It Works**

We've added a **"How It Works"** section on the home page to guide new users through the platform's process.

1.  **Donate:** A user with surplus food can easily post a new food item with details like a photo, quantity, and pickup location.
2.  **Request:** Users in need can browse the available food listings and request an item with a single click.
3.  **Connect:** The platform connects donors and requesters, streamlining the process of food sharing.

### **Our Impact**

A new section highlighting the positive impact of food sharing has been added to the home page, showcasing how the platform helps reduce waste and support the community.

-----

## 🛠️ Technologies Used

### Frontend

  * **React:** For building a dynamic and responsive user interface.
  * **Firebase:** For robust authentication.
  * **React Router:** For client-side routing. 
  * **Tailwind CSS & DaisyUI:** For a clean and modern design.
  * **Framer Motion:** For adding smooth animations.
  * **TanStack Query:** For efficient data fetching.
  * **Axios:** For making API requests.
  * **React Hot Toast & SweetAlert2:** For user notifications and alerts.

### Backend

  * **Node.js & Express.js:** The server framework.
  * **MongoDB & Mongoose:** The database and its object modeling tool.
  * **jsonwebtoken (JWT):** For securing private routes.
  * **CORS:** To handle cross-origin requests.
  * **dotenv:** For managing environment variables.

-----

## 📦 npm Packages

### Client-side

  * `react-awesome-reveal`
  * `react-datepicker`
  * `@tanstack/react-query`
  * `axios`
  * `firebase`
  * `framer-motion`
  * `react-hot-toast`
  * `sweetalert2`

### Server-side

  * `axios`
  * `cors`
  * `dotenv`
  * `express`
  * `jsonwebtoken`
  * `mongodb`
  * `mongoose`
  * `nodemon` 