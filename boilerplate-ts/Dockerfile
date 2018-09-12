FROM node

ADD . /app/boilerplate-ts
WORKDIR /app/boilerplate-ts

# install node dependency packages on container
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
