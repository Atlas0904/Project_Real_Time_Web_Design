#   Docker Image 
FROM node:argon
# app
RUN mkdir -p /usr/src/app
#
WORKDIR /usr/src/app
# package.json
COPY package.json /usr/src/app/
# app
RUN npm install
#
COPY . /usr/src/app
# container
EXPOSE 8080
# container
CMD [ "npm", "start" ]
