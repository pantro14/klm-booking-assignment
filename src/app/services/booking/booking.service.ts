import { Injectable } from '@angular/core';
import {BookingNs} from '../../../graphql/namespace';
import {HttpClient} from '@angular/common/http';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {ApolloQueryResult, InMemoryCache} from '@apollo/client/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(readonly http: HttpClient, private apollo: Apollo) {
    if (!this.apollo.use('booking')) {
      const link = new HttpLink(http).create({
        uri: 'http://localhost:4000/graphql',
      });
      apollo.createNamed('booking', {
        cache: new InMemoryCache(),
        link,
      });
    }
  }

  fetchBookingDetails(bookingCode: string, lastName: string): Observable<ApolloQueryResult<BookingNs.BookingDetailsQueryResult>> {
    return new BookingNs.BookingDetailsGQL(this.apollo).fetch({
      bookingCode,
      lastName
    });
  }
}
