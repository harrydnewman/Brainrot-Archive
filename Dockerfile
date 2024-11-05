# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the Vite build output (dist folder) and server file to the container
COPY dist/ dist/
COPY server.js .

# Expose port 3300 for the server
EXPOSE 3300

# Start the Express server
CMD ["npm", "start"]
