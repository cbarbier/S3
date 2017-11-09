FROM node:6-slim
MAINTAINER Giorgio Regni <gr@scality.com>

WORKDIR /usr/src/app

# Keep the .git directory in order to properly report version
COPY . /usr/src/app

RUN apt-get update
RUN apt-get install -y python
RUN apt-get install -y jq
RUN apt-get install -y git
RUN apt-get install -y build-essential
RUN apt-get install -y ssh
RUN npm install --production
RUN rm -rf /var/lib/apt/lists/*
RUN npm cache clear
RUN rm -rf ~/.node-gyp
RUN rm -rf /tmp/npm-*

VOLUME ["/usr/src/app/localData","/usr/src/app/localMetadata"]

ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]
CMD [ "npm", "start" ]

EXPOSE 8000
