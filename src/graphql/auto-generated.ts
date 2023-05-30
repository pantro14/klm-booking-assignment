import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
}

export interface Query {
  __typename?: 'Query';
  booking?: Maybe<Booking>;
}

export interface Booking {
  __typename?: 'Booking';
  bookingCode?: Maybe<Scalars['String']['output']>;
  contactDetails?: Maybe<Array<Maybe<ContactDetails>>>;
  itinerary?: Maybe<Itinerary>;
  passengers?: Maybe<Passengers>;
}

export interface ContactDetails {
  __typename?: 'ContactDetails';
  address?: Maybe<Scalars['String']['output']>;
  class?: Maybe<Scalars['String']['output']>;
}

export interface Itinerary {
  __typename?: 'Itinerary';
  connections?: Maybe<Array<Maybe<Connections>>>;
  type?: Maybe<Scalars['String']['output']>;
}

export interface Connections {
  __typename?: 'Connections';
  destination?: Maybe<Destination>;
  duration?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  origin?: Maybe<Origin>;
  segments?: Maybe<Array<Maybe<Segments>>>;
}

export interface Destination {
  __typename?: 'Destination';
  city?: Maybe<City>;
  IATACode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface City {
  __typename?: 'City';
  country?: Maybe<Country>;
  IATACode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface Country {
  __typename?: 'Country';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface Origin {
  __typename?: 'Origin';
  city?: Maybe<City>;
  IATACode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface Segments {
  __typename?: 'Segments';
  arriveOn?: Maybe<ArriveOn>;
  departFrom?: Maybe<DepartFrom>;
  id?: Maybe<Scalars['Int']['output']>;
  informational?: Maybe<Scalars['Boolean']['output']>;
  marketingFlight?: Maybe<MarketingFlight>;
  type?: Maybe<Scalars['String']['output']>;
}

export interface ArriveOn {
  __typename?: 'ArriveOn';
  city?: Maybe<City>;
  IATACode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface DepartFrom {
  __typename?: 'DepartFrom';
  city?: Maybe<City>;
  IATACode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface MarketingFlight {
  __typename?: 'MarketingFlight';
  carrier?: Maybe<Carrier>;
  number?: Maybe<Scalars['String']['output']>;
  numberOfStops?: Maybe<Scalars['Int']['output']>;
  operatingFlight?: Maybe<OperatingFlight>;
  sellingClass?: Maybe<SellingClass>;
  status?: Maybe<Status>;
}

export interface Carrier {
  __typename?: 'Carrier';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface OperatingFlight {
  __typename?: 'OperatingFlight';
  arrivalTerminal?: Maybe<ArrivalTerminal>;
  cabin?: Maybe<Cabin>;
  carrier?: Maybe<Carrier>;
  checkInEnd?: Maybe<Scalars['String']['output']>;
  checkInStart?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Equipment>;
  flown?: Maybe<Scalars['Boolean']['output']>;
  localCheckInEnd?: Maybe<Scalars['String']['output']>;
  localCheckInStart?: Maybe<Scalars['String']['output']>;
  localScheduledArrival?: Maybe<Scalars['String']['output']>;
  localScheduledDeparture?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  scheduledArrival?: Maybe<Scalars['String']['output']>;
  scheduledDeparture?: Maybe<Scalars['String']['output']>;
}

export interface ArrivalTerminal {
  __typename?: 'ArrivalTerminal';
  name?: Maybe<Scalars['String']['output']>;
}

export interface Cabin {
  __typename?: 'Cabin';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface Equipment {
  __typename?: 'Equipment';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface SellingClass {
  __typename?: 'SellingClass';
  code?: Maybe<Scalars['String']['output']>;
}

export interface Status {
  __typename?: 'Status';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface Passengers {
  __typename?: 'Passengers';
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Title>;
}

export interface Title {
  __typename?: 'Title';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export type BookingDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type BookingDetailsQueryResult = { __typename?: 'Query', booking?: { __typename?: 'Booking', bookingCode?: string | null } | null };

export const BookingDetailsDocument = gql`
    query BookingDetails {
  booking {
    bookingCode
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BookingDetailsGQL extends Apollo.Query<BookingDetailsQueryResult, BookingDetailsQueryVariables> {
    override document = BookingDetailsDocument;
    override client = 'booking';
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }