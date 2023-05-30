# GraphQL codegen for countries open API

## Schema SDL
1- first run the server:
`npm run start-server`
  - [http://localhost:4000/graphql](http://localhost:4000/graphql)

2- Download the schema by running:
`npm run get-booking-schema`


## Create autocomplete file with graphql codegen
Finally to create the types and query/mutation class use the following commands
`graphql-codegen --config src/graphql/codegen.yml`
`prettier --write src/graphql/auto-generated.ts`
