# Tech quiz app

This is a web application made with Vue3 using Vite.

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
