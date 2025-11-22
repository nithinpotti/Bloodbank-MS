# 🩸 Blood Bank Management System (MERN)

A full-stack Blood Bank Management System built using the MERN stack to digitize and streamline blood inventory management.  
The system allows organizations, hospitals, and donors to record blood donations, requests, and track real-time inventory (in milliliters) across different blood groups.

---

## 🚀 Features

- 🔐 **Secure Authentication & Authorization**
  - Separate login flows for **Donor**, **Hospital**, **Organization**, and **Admin**
  - JWT-based protected APIs
- 🩸 **Inventory Management**
  - Track **inflow (donations)** and **outflow (usage/requests)** of blood
  - Maintain stock in **milliliters (ml)** by blood group
- 🧑‍🤝‍🧑 **Role-based Dashboards**
  - Donor view: donation history, last donation date
  - Hospital view: blood requests, usage logs
  - Organization view: manage donation camps & overall inventory
  - Admin view: manage all users and overall system activity
- 📊 **Real-time Stats & History**
  - View total collected, used, and available blood
  - Filter logs by date range, blood group, and role
- 🌐 **Responsive Web UI**
  - User-friendly interface for all roles
  - Designed to be simple for non-technical users

---

## 🛠️ Tech Stack

**Frontend (client folder)**  
- React.js (SPA)
- React Router (navigation)
- Axios (API calls)

**Backend (root)**  
- Node.js, Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- dotenv for environment configuration
- morgan for request logging
- moment for date/time formatting
- cors for cross-origin handling

---

## 📁 Project Structure

```bash
blood-bank-management-system/
├── client/              # React frontend
├── config/              # DB connection and configuration
├── controllers/         # Route controller logic
├── middlewares/         # Auth & error middlewares
├── models/              # Mongoose models (User, Inventory, etc.)
├── routes/              # API route definitions
├── node_modules/        # (should be ignored in .gitignore)
├── server.js            # Express app entry point
├── package.json         # Backend scripts & dependencies
