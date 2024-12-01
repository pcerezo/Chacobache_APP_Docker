FROM node:18

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD ["sh", "-c", "npm run build -- --output-path=../docs --base-href /chacobache_app_docker && npm start"]
#CMD ["ng", "serve", "--host", "0.0.0.0"]