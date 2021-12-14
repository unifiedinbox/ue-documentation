FROM node:14-slim

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir -p /src && mv /tmp/node_modules /src

# Bundle app source
#COPY public/dist /src
COPY . /src
EXPOSE  5000

ENV NODE_ENV production

WORKDIR /src

CMD ["npm", "start"]