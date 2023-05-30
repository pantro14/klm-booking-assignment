import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import * as fs from "fs";

const app = express()
const port = 4000

// Data Source
const data = JSON.parse(fs.readFileSync('./server/data/mock.json').toString());
// Schema
const typeDefs = fs.readFileSync('./server/graphql/schema.graphql').toString();
// Resolver
const resolvers = {
  Query: {
    booking: (obj, args, context) => context.booking,
  },
}

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Entrypoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`)
})
