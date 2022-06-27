# Todo App

A simple web app that allows you to create and update todos. More specifically, the user can:
1. Sign up
2. Sign in
3. Log out
4. Create a todo
5. Update a todo
6. Toggle a todo as complete / not complete
7. Remove a todo

This web app has been developed mostly with React, Typescript, Styled-Components, Axios, Docker. The app has been designed to be responsive. Back-end API kindly provided by Tiko.


## Prerequisites

Make sure Docker is installed on your machine. You can download it from: 
https://docs.docker.com/get-docker/


## To run and use the app

1. Clone or download the repository locally 
2. Open a terminal window
3. cd to the repository
4. Run `docker-compose up --build -d`
5. Open a browser window
6. Navigate to the 3000 port on your local host (`http://127.0.0.1:3000` on most browsers)
7. Have fun creating todos :)

## Unfinished business

1. Lint code
2. Refactor code as to be more modular, readable and maintanaible
3. Add more granular and meaningful error handling (e.g. if the error is due to token not being valid), with targeted UI componenents and pages
4. Add tests (e.g. in Jest)
