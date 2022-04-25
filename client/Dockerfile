FROM node:alpine3.15
COPY . /client
WORKDIR /client
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD serve -s -n build 