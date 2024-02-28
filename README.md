# Tech quiz app

This is a fully Vue.js with TypeScript web app for solving tech quizzes.

## Tech stack
- Vue.js with TypeScript
- VueRouter for routing
- Pinia for state management in local storage
- Playwright for E2E tests
- Vitest for unit tests

## Functionalities
A user can:
- choose parameters for the quiz
- solve the quiz by requested parameters
- see quiz result
- see previous quizzes results

## Project Setup

```sh
npm install
```

### Generate your private api key for the quiz

Sign in to generate your private api key at: https://quizapi.io/

### Create a .env.local file to place API url link and your private key:

For the project to run, you need to make sure to have .env.local file with these variables:
```sh
VITE_API_URL='https://quizapi.io/api/v1/questions'
VITE_API_KEY='YOUR_API_KEY'
```

### Build the project
```sh
npm run build
```

### Now you can run the project on your local machine
```sh
npm run preview
```

### Visit project's page
http://localhost:5173/
