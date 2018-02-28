FROM node:9.5.0

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install && mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will bey used if possible
WORKDIR /opt/app
ADD . /opt/app

RUN npm run build

CMD ["npm","start"]
