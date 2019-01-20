FROM node:4.6
WORKDIR /Users/jos/Documents/dev/docker-hw
ADD . /Users/jos/Documents/dev/docker-hw
RUN npm install
EXPOSE 2500
CMD [ "npm", "start" ]