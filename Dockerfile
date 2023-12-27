FROM node:21.2.0 as build

WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build

FROM node:21.2.0 as prod
WORKDIR /usr/app
COPY --from=build /usr/app/dist ./dist
COPY --from=build /usr/app/node_modules ./node_modules
EXPOSE 3000
CMD [ "node", "dist/index.mjs" ]