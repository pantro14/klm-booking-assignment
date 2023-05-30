import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import * as fs from "fs";

const app = express()
const port = 4000

const data = JSON.parse(fs.readFileSync('./server/data/mock.json').toString());
const typeDefs = fs.readFileSync('./server/graphql/schema.graphql').toString();

// Schema
const typeDefs2 = `
type Title {
  code: String
  name: String
}

type Passengers {
  id: Int
  firstName: String
  lastName: String
  title: Title
}

type Equipment {
  code: String
  name: String
}

type Cabin {
  code: String
  name: String
}

type ArrivalTerminal {
  name: String
}

type Carrier {
  code: String
  name: String
}

type OperatingFlight {
  number: String
  duration: String
  flown: Boolean
  checkInStart: String
  localCheckInStart: String
  checkInEnd: String
  localCheckInEnd: String
  scheduledArrival: String
  localScheduledArrival: String
  scheduledDeparture: String
  localScheduledDeparture: String
  equipment: Equipment
  cabin: Cabin
  arrivalTerminal: ArrivalTerminal
  carrier: Carrier
}

type SellingClass {
  code: String
}

type Status {
  code: String
  name: String
}

type MarketingFlight {
  number: String
  numberOfStops: Int
  operatingFlight: OperatingFlight
  sellingClass: SellingClass
  status: Status
  carrier: Carrier
}

type Country {
  code: String
  name: String
}

type City {
  IATACode: String
  name: String
  country: Country
}

type ArriveOn {
  IATACode: String
  name: String
  city: City
}

type DepartFrom {
  IATACode: String
  name: String
  city: City
}

type Segments {
  id: Int
  type: String
  informational: Boolean
  marketingFlight: MarketingFlight
  arriveOn: ArriveOn
  departFrom: DepartFrom
}

type Destination {
  IATACode: String
  name: String
  city: City
}

type Origin {
  IATACode: String
  name: String
  city: City
}

type Connections {
  id: Int
  duration: String
  segments: [Segments]
  destination: Destination
  origin: Origin
}

type Itinerary {
  type: String
  connections: [Connections]
}

type ContactDetails {
  class: String
  address: String
}

type Booking {
  bookingCode: String
  passengers: Passengers
  itinerary: Itinerary
  contactDetails: [ContactDetails]
}

type Query {
  booking: Booking
}
`

// Resolver for warriors
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
  console.log(typeDefs);
  console.log(`Running a server at http://localhost:${port}`)
})
