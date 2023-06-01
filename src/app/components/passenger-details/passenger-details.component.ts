import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingNs} from '../../../graphql/namespace';
import {formatPassengerName} from '../../utils/passenger.utils';

@Component({
  selector: 'app-passenger-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './passenger-details.component.html',
  styles: [
  ]
})
export class PassengerDetailsComponent  implements OnInit {
  @Input() contactDetails: BookingNs.ContactDetails;
  @Input() passenger: BookingNs.Passengers;

  email: string;
  name: string;

  ngOnInit() {
    this.name = formatPassengerName(this.passenger);
    this.email = this.contactDetails.address ? this.contactDetails.address.toLowerCase() : '';
  }
}
