FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000
EXPOSE 7000

# Set environment variables
ENV PORT=8000
ENV CORS_ORIGIN=*
ENV MONGODB_URI=mongodb://localhost:27017/db


# Run the app (you might need to adjust the start script)
CMD ["npm", "start"]

