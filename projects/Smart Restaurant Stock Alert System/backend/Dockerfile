FROM node:22-alpine

# Set working directory
WORKDIR /stockWise/app

# Copy package files first (better for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Expose backend port
EXPOSE 8000

# Start the server
CMD [ "npm", "start" ]
