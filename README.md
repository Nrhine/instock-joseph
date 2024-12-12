![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![](https://img.shields.io/badge/Knex.js-ff5722?style=for-the-badge&logo=knex&logoColor=white)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 12.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Getting Started

#### Find Server Here: [https://github.com/Nrhine/instock-joseph-api]

### 1. Clone the Repository

#### Client

```bash
git clone https://github.com/Nrhine/instock-joseph.git
```

#### Server

```bash
git clone https://github.com/Nrhine/instock-joseph-api.git
```

### 2. Set Up Environment Variables

1. In the root directory of the project, you'll find a file named `.env.sample`.
2. Create a copy of this file and name it `.env`.
3. Do this for both server and client side.

```bash
cp .env.sample .env
```

3. Open the `.env` file and fill in the required environment variables with your specific values.
4. We used 'http://localhost:5173' for the client side .env and 8080 for the port number in the server side .env

### 3. Install Dependencies

Install dependencies for both the server and client:

```bash
# Install server dependencies
npm install

# Install client dependencies
npm install
```

### 4. Migrate Tables and Seed

1. On the server side run:

```bash
npx knex migrate:latest
```

2. Seed the migrated database:

```bash
npx knex seed:run
```

### 5. Run the Application

You'll need to start both the server and client sides of the application.

1. Start the server:

```bash
npm run dev
```

This will start the Express server, typically on `http://localhost:8080` (check the console output for the exact URL and replace port number with the one you chose in the server side .env file).

2. In a new terminal window, start the client:

```bash
npm run dev
```

This will start the React development server, typically on `http://localhost:5173`

### 6. Access the Application

Open your web browser and visit `http://localhost:5173/` to view the React frontend. The frontend should now be connected to the Express backend. Check routes in App.jsx to ensure you are using the correct URL.

## Additional Information

- Make sure all required environment variables are properly set in the `.env` file for both the client and server to function correctly.

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed correctly.
2. Check that your `.env` file is set up properly with all required variables.
3. Make sure no other processes are using the required ports.

For any other problems, please open an issue in the GitHub repository.
