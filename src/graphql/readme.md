# GraphQL codegen booking API

## Download the Schema SDL
1- Run the graphql serve in the background:

`npm run start:graphql-server`

2- Download the schema with:

`npm run get-booking-schema`


## Create autocomplete file with graphql codegen
Finally to create the types and query/mutation class use the following commands:

Run: `graphql-codegen --config src/graphql/codegen.yml`

Run: `prettier --write src/graphql/auto-generated.ts`
