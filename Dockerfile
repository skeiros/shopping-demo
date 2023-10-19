# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Create a directory for your app
RUN mkdir -p /usr/src/app

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install the Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the rest of your application source code
COPY . .

# Build your Angular application
RUN ng build

# Expose the port your Angular app will run on (default: 4200)
EXPOSE 4200

# Define the command to start your Angular app
CMD ["ng", "serve", "--host", "0.0.0.0"]
