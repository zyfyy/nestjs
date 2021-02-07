FROM nestjs-env:15
COPY package.json  yarn.lock ./
RUN yarn install --production
COPY . .
CMD yarn start:prod

