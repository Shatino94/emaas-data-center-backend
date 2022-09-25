FROM node:latest

WORKDIR /src

ADD package.json \
    pnpm-lock.yaml \
    ./

RUN npm install --global pnpm \
   && pnpm install \
  && :

ADD . .

ENV NODE_ENV \
    JWT_SECRET \
    DB \
    APPRAISAL_ENDPOINT


USER ${USER}
EXPOSE 8080
ENTRYPOINT ["bash", "/src/docker/entrypoint.sh"]
