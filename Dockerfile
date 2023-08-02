# Dockerfile
FROM node:16

# create destination directory
RUN mkdir -p /usr/src/open-docs
WORKDIR /usr/src/open-docs

# copy the app, note .dockerignore
COPY . /usr/src/open-docs/

RUN npm install -g npm
RUN yarn
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "serve" ]