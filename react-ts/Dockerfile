FROM node

COPY . /app/react-ts
WORKDIR /app/react-ts

COPY package*.json ./

# install node dependency packages on container
RUN npm install


EXPOSE 3000
CMD [ "npm", "start" ]
