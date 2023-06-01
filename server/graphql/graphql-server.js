import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import * as fs from "fs";
import axios from "axios";

const app = express()
const port = 4000

// Schema
const typeDefs = fs.readFileSync('./server/graphql/schema.graphql').toString();
// Resolver
const resolvers = {
  Query: {
    loginCheckIn: (obj, args, context) => {
      const { booking } = context;
      return (
        args.bookingCode === booking.bookingCode && args.lastName === booking.passengers.lastName
      ) ? context.booking : null;
    },
    bookingDetails: (obj, args, context) => {
      const { booking } = context;
      return (
        args.bookingCode === booking.bookingCode
      ) ? context.booking : null;
    },
  },
}
const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  '/graphql',
  graphqlHTTP(async (req, res, graphQLParams) => {
    // Data from API
    const response = await axios(`http://localhost:3000/booking`);
    return {
      schema: executableSchema,
      context: response.data,
      graphiql: true,
    }
  })
)
app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`)
})
