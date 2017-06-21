FROM ubuntu
RUN apt-get -y update && apt-get install -y nodejs && apt-get install -y npm

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

# Bundle app source
COPY . /usr/src/app

RUN npm install

EXPOSE 8080
CMD [ "nodejs", "server.js" ]