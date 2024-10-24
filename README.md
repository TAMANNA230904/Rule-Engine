# Rule Engine

A 3-tier rule engine that evaluates user eligibility based on dynamic rules created using an Abstract Syntax Tree (AST). The rules are stored in a MongoDB database, and the frontend allows users to check their eligibility by entering relevant attributes.

## Features

- Dynamic rule creation using AST
- User eligibility evaluation based on rules
- Frontend built with Vite React for rule management and user input
- Backend API built with Node.js, Express
- MongoDB for rule storage
- Axios for API communication

## Architecture

The project follows a 3-tier architecture:
- **Frontend**: React (Vite)
- **Backend**: Node.js, Express
- **Database**: MongoDB (for storing rules)

![Architecture Diagram](https://drive.google.com/file/d/1q6gpNLqDVSYjBzq5Mvnjp9zr2UVEbfCd/view?usp=sharing)

## Technologies Used

- React (Vite)
- Node.js, Express
- MongoDB
- Axios

## Getting Started

### Prerequisites
Ensure that you have the following installed:
- Node.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rule-engine.git
    ```

2.Install dependencies for backend:
   ```bash
   cd backend
   npm install 
    ```
3.Install dependencies for frontend:
   ```bash
   cd backend
   npm install
   ```

4.Create a MongoDB Cluster and get a connection string.

5. Running backend server
   ```bash
   npm run dev
    ```
6.Running frontend server
  ```bash
   npm run dev
   ```
[View UI](https://drive.google.com/file/d/100TPI2OiR_i_uo92axn_Owb2bceUi5ta/view?usp=sharing)

