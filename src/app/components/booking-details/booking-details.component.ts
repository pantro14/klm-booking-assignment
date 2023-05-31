import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-details.component.html',
  styles: [
  ]
})
export class BookingDetailsComponent  implements OnInit, OnDestroy {
  routeSub: Subscription;
  code: string;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.code = params['code'];
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
