FROM node:lts

WORKDIR /app

COPY . /app/

RUN yarn install && \
    yarn build

CMD yarn start
