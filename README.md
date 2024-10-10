# bun-nextjs-docker
Dockerize NextJS project with Bun Image (Work with nextJS tailwindcss and typescript, App route))

## How to use

- Step 1:
PUT NEXTJS project in `frontend` folder.
Create `.env` file

- Step 2:
Set `next.config.js` :`output: "standalone", // use for docker`. See example in `next.config.js` file.

- Step 3:
Run `docker-compose build` to start the project.

- Step 4:
Run `docker-compose up` to start the project.

- Step 5:
Open browser and go to `http://localhost:9999` (Up to your setting in docker-compose.yml) to see the result.

- Step 6:
If project work oke, login to docker hub and push the image to your docker hub.
```
docker login
docker-compose push
```
It will push the image to your docker hub.

- Step 7:
Deploy to your remote server.
```
touch .env
nano .env
```
Add conent to .env file. Then create docker compose file.
```
touch docker-compose.yml
nano docker-compose.yml
```
Add content to docker-compose.yml file. Then run `docker-compose up -d` to start the project.
