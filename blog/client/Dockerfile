# Specify base image
FROM node:14.15.4-alpine

# Add the following line 
ENV CI=true

WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY ./ ./

# Default command
CMD [ "npm", "start" ]
