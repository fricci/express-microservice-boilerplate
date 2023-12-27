# express-microservice-boilerplate

This small project is boilerplate code or project skeleton to create microservices on the following stack:
- NodeJS
- Express
- Typescript

The project can be containerised with Docker with multi-stage docker build.

## npm scripts
`npm run build` Build the Typescript files. The output directory is the `./dist`.

`npm run build:dev` Start the dev server and watching the source files. The server restarts automatically if the source changed.

## Javascript version
The output javascript is ES6 module files (`.mjs`).

Note the extension of the imported files in the mts files:
```typescript
import testRouting from "./testRouting/index.mjs"
```