# NeverEatAlone-showcase

#About

Simple token auth handler

#Install

1)do "npm init"

2)run server from root of project "node server.js"

#Usage
1) you can test the app via postman
Available routes:
GET '/' - to test if authed (add x-access-token within token, fetched from auth)
POST '/auth' - to get simple access token using login details (name and password as params in post data)

2)login info can be found in /app/config/index.js

#Tests
1)install jasmine globally (npm install jasmine-node -g)

2)under tests dir run "jasmine-node spec"
