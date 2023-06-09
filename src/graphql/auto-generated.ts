import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
}

export interface ArrivalTerminal {
  __typename?: 'ArrivalTerminal';
  name: Maybe<Scalars['String']['output']>;
}

export interface ArriveOn {
  __typename?: 'ArriveOn';
  IATACode: Maybe<Scalars['String']['output']>;
  city: Maybe<City>;
  name: Maybe<Scalars['String']['output']>;
}

export interface Booking {
  __typename?: 'Booking';
  bookingCode: Maybe<Scalars['String']['output']>;
  contactDetails: Maybe<Array<Maybe<ContactDetails>>>;
  itinerary: Maybe<Itinerary>;
  passengers: Maybe<Passengers>;
}

export interface Cabin {
  __typename?: 'Cabin';
  code: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
}

export interface Carrier {
  __typename?: 'Carrier';
  code: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
}

export interface City {
  __typename?: 'City';
  IATACode: Maybe<Scalars['String']['output']>;
  country: Maybe<Country>;
  name: Maybe<Scalars['String']['output']>;
}

export interface Connections {
  __typename?: 'Connections';
  destination: Maybe<Destination>;
  duration: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  origin: Maybe<Origin>;
  segments: Maybe<Array<Maybe<Segments>>>;
}

export interface ContactDetails {
  __typename?: 'ContactDetails';
  address: Maybe<Scalars['String']['output']>;
  class: Maybe<Scalars['String']['output']>;
}

export interface Country {
  __typename?: 'Country';
  code: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
}

export interface DepartFrom {
  __typename?: 'DepartFrom';
  IATACode: Maybe<Scalars['String']['output']>;
  city: Maybe<City>;
  name: Maybe<Scalars['String']['output']>;
}

export interface Destination {
  __typename?: 'Destination';
  IATACode: Maybe<Scalars['String']['output']>;
  city: Maybe<City>;
  name: Maybe<Scalars['String']['output']>;
}

export interface Equipment {
  __typename?: 'Equipment';
  code: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
}

export interface Itinerary {
  __typename?: 'Itinerary';
  connections: Maybe<Array<Maybe<Connections>>>;
  type: Maybe<Scalars['String']['output']>;
}

export interface MarketingFlight {
  __typename?: 'MarketingFlight';
  carrier: Maybe<Carrier>;
  number: Maybe<Scalars['String']['output']>;
  numberOfStops: Maybe<Scalars['Int']['output']>;
  operatingFlight: Maybe<OperatingFlight>;
  sellingClass: Maybe<SellingClass>;
  status: Maybe<Status>;
}

export interface OperatingFlight {
  __typename?: 'OperatingFlight';
  arrivalTerminal: Maybe<ArrivalTerminal>;
  cabin: Maybe<Cabin>;
  carrier: Maybe<Carrier>;
  checkInEnd: Maybe<Scalars['String']['output']>;
  checkInStart: Maybe<Scalars['String']['output']>;
  duration: Maybe<Scalars['String']['output']>;
  equipment: Maybe<Equipment>;
  flown: Maybe<Scalars['Boolean']['output']>;
  localCheckInEnd: Maybe<Scalars['String']['output']>;
  localCheckInStart: Maybe<Scalars['String']['output']>;
  localScheduledArrival: Maybe<Scalars['String']['output']>;
  localScheduledDeparture: Maybe<Scalars['String']['output']>;
  number: Maybe<Scalars['String']['output']>;
  scheduledArrival: Maybe<Scalars['String']['output']>;
  scheduledDeparture: Maybe<Scalars['String']['output']>;
}

export interface Origin {
  __typename?: 'Origin';
  IATACode: Maybe<Scalars['String']['output']>;
  city: Maybe<City>;
  name: Maybe<Scalars['String']['output']>;
}

export interface Passengers {
  __typename?: 'Passengers';
  firstName: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  title: Maybe<Title>;
}

export interface Query {
  __typename?: 'Query';
  bookingDetails: Maybe<Booking>;
  loginCheckIn: Maybe<Booking>;
}

export interface QueryBookingDetailsArgs {
  bookingCode: Scalars['String']['input'];
}

export interface QueryLoginCheckInArgs {
  bookingCode: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
}

export interface Segments {
  __typename?: 'Segments';
  arriveOn: Maybe<ArriveOn>;
  departFrom: Maybe<DepartFrom>;
  id: Maybe<Scalars['Int']['output']>;
  informational: Maybe<Scalars['Boolean']['output']>;
  marketingFlight: Maybe<MarketingFlight>;
  type: Maybe<Scalars['String']['output']>;
}

export interface SellingClass {
  __typename?: 'SellingClass';
  code: Maybe<Scalars['String']['output']>;
}

export interface Status {
  __typename?: 'Status';
  code: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
}

export interface Title {
  __typename?: 'Title';
  code: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
}

export type BookingDetailsQueryVariables = Exact<{
  bookingCode: Scalars['String']['input'];
}>;

export type BookingDetailsQueryResult = {
  __typename?: 'Query';
  bookingDetails: {
    __typename?: 'Booking';
    bookingCode: string;
    passengers: {
      __typename?: 'Passengers';
      firstName: string;
      lastName: string;
      title: { __typename?: 'Title'; name: string };
    };
    itinerary: {
      __typename?: 'Itinerary';
      connections: Array<{
        __typename?: 'Connections';
        duration: string;
        segments: Array<{
          __typename?: 'Segments';
          departFrom: { __typename?: 'DepartFrom'; IATACode: string };
          arriveOn: { __typename?: 'ArriveOn'; IATACode: string };
          marketingFlight: {
            __typename?: 'MarketingFlight';
            number: string;
            carrier: { __typename?: 'Carrier'; code: string; name: string };
            status: { __typename?: 'Status'; name: string };
            operatingFlight: {
              __typename?: 'OperatingFlight';
              checkInStart: string;
              checkInEnd: string;
              scheduledDeparture: string;
              scheduledArrival: string;
              cabin: { __typename?: 'Cabin'; name: string };
              equipment: { __typename?: 'Equipment'; name: string };
            };
          };
        }>;
      }>;
    };
    contactDetails: Array<{
      __typename?: 'ContactDetails';
      class: string;
      address: string;
    }>;
  };
};

export type LoginCheckInQueryVariables = Exact<{
  bookingCode: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
}>;

export type LoginCheckInQueryResult = {
  __typename?: 'Query';
  loginCheckIn: { __typename?: 'Booking'; bookingCode: string };
};

export const BookingDetailsDocument = gql`
  query BookingDetails($bookingCode: String!) {
    bookingDetails(bookingCode: $bookingCode) {
      bookingCode
      passengers {
        title {
          name
        }
        firstName
        lastName
      }
      itinerary {
        connections {
          duration
          segments {
            departFrom {
              IATACode
            }
            arriveOn {
              IATACode
            }
            marketingFlight {
              number
              carrier {
                code
                name
              }
              status {
                name
              }
              operatingFlight {
                checkInStart
                checkInEnd
                scheduledDeparture
                scheduledArrival
                cabin {
                  name
                }
                equipment {
                  name
                }
              }
            }
          }
        }
      }
      contactDetails {
        class
        address
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class BookingDetailsGQL extends Apollo.Query<
  BookingDetailsQueryResult,
  BookingDetailsQueryVariables
> {
  override document = BookingDetailsDocument;
  override client = 'booking';
  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const LoginCheckInDocument = gql`
  query LoginCheckIn($bookingCode: String!, $lastName: String!) {
    loginCheckIn(bookingCode: $bookingCode, lastName: $lastName) {
      bookingCode
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class LoginCheckInGQL extends Apollo.Query<
  LoginCheckInQueryResult,
  LoginCheckInQueryVariables
> {
  override document = LoginCheckInDocument;
  override client = 'booking';
  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
