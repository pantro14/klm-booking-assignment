# GraphQL codegen for countries open API

## Schema SDL
1- Download the schema by running:
`npm run update-schema:server`


## Create autocomplete file with graphql codegen
Finally to create the types and query/mutation class use the following commands
`graphql-codegen --config src/graphql/codegen.yml`
`prettier --write src/graphql/auto-generated.ts`
