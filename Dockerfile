FROM nestjs-env:15
WORKDIR /app
COPY package.json  yarn.lock ./
RUN yarn install --production
COPY . .
CMD yarn start:prod

