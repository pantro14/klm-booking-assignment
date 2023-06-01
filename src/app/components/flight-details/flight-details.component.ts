import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingNs} from '../../../graphql/namespace';
import {FlightDetailsItinerary} from '../../models/flight-details-itinerary';
import {formatAircraftName, formatCarrierName, formatDuration} from '../../utils/flight-details.utils';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-details.component.html',
  styles: [
  ]
})
export class FlightDetailsComponent implements OnInit{
  @Input() itinerary: BookingNs.Itinerary;

  flightItinerary: FlightDetailsItinerary;


  ngOnInit() {
    const connection = this.itinerary.connections ? this.itinerary.connections[0] : undefined;
    const segment = connection?.segments ? connection.segments[0] : undefined;
    const departure = segment?.departFrom;
    const arrival = segment?.arriveOn;
    const marketingFlight = segment?.marketingFlight as BookingNs.MarketingFlight;
    const operatingFlight = marketingFlight.operatingFlight as BookingNs.OperatingFlight;
    this.flightItinerary = {
      carrierName: marketingFlight.carrier.name,
      departureDate: new Date(operatingFlight.scheduledDeparture).toString(),
      flightNumber: formatCarrierName(marketingFlight),
      cabinType: operatingFlight.cabin.name.toUpperCase(),
      aircraft: formatAircraftName(operatingFlight.equipment.name),
      departureCode: departure?.IATACode,
      arrivalCode: arrival?.IATACode,
      flightDuration: formatDuration(connection?.duration),
      arrivalDate: new Date(operatingFlight.scheduledArrival).toString(),
      checkInStartDate: new Date(operatingFlight.checkInStart).toString(),
      checkInEndDate: new Date(operatingFlight.checkInEnd).toString(),
      flightStatus: marketingFlight.status.name,
    }
  }
}
