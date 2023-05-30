import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingService} from '../../services/booking/booking.service';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule],
  providers: [BookingService],
  templateUrl: './check-in.component.html',
  styles: [
  ]
})
export class CheckInComponent implements OnInit{

  constructor(
    private bookingService: BookingService,
  ) {}

  ngOnInit() {
    this.bookingService.fetchBookingDetails()
      .subscribe({
        next: (response) => {
          console.log(response.data.booking);
        },
        error: err => console.error('error: ', err)
      })
  }
}
