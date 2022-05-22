FROM node:16-slim

RUN apt-get update && apt-get install libcurl4 -y

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


EXPOSE 8080
CMD [ "npm", "run", "test" ]
