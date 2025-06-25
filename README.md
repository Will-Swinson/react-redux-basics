# 🧠 React Redux Basics

A beginner-friendly React + Redux application demonstrating how to manage global state for accounts and customers using Redux Toolkit. This project is perfect for learning or teaching the core concepts of Redux in a modular and clean structure.

---

## 🚀 Features

- 📦 Modular Redux slices (`accountSlice`, `customerSlice`)
- ➕ Add and manage customers
- 💰 Perform account operations (deposit, withdraw, request loan, etc.)
- 🏗️ Clean folder structure to separate features and components
- 🧪 Multiple store implementations for experimentation (`store`, `store-v1`, `store-v2`)

---

## 🧩 Tech Stack

- React
- Redux Toolkit
- Vite (fast dev build tool)
- CSS Modules

---

## 📁 Folder Structure

`src/` – Main source directory of the application  
`features/` – Domain-specific Redux logic and components (Ducks pattern)  
`features/account/` – Account operations, balance display, and Redux slice  
`features/customers/` – Customer creation, display, and customer slice  
`starter/` – App entry point and multiple store versions for learning  
`App.jsx` – Main App component  
`main.jsx` – React root renderer  
`store.js` / `store-v1.js` / `store-v2.js` – Redux store setups (experiments/variants)  
`index.css` – Global styles  
`assets/` – Static assets (e.g., images, logos, etc.)

`.eslintrc.cjs` – ESLint configuration  
`index.html` – HTML entry template (Vite)  
`package.json` – Project dependencies and scripts  
`vite.config.js` – Vite bundler configuration



---

## 🛠 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
