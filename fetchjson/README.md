# Setup Steps

Run in terminal:

1. `npm init -y` to create package.json file
1. `npm install axios` to create node_modules folder and axios plus related packages
1. Add file, `index.ts` and see content for axios example using Typescript
1. `npx tsx index.ts` to run the TypeScript file directly without compiling it to a JavaScript file like `index.js`, executing `index.ts` in-memory.
    1. TypeScript cannot be run directly in the browser or inside NodeJS
    1. Note, if prompted to install npx, type `y` for yes
    1. Expected JSON object output printed to console: `{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }`
1. Add file, `index-advanced.ts`  to see example actually using Typescript
