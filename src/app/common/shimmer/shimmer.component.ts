import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from '../card/card.component';
import {PassengerDetailsComponent} from '../../components/passenger-details/passenger-details.component';

@Component({
  selector: 'app-shimmer',
  standalone: true,
  imports: [CommonModule, CardComponent, PassengerDetailsComponent],
  template: `
    <div class="hero min-h-screen">
      <div class="hero-overlay flex justify-center py-12 px-2 md:px-6">
        <div class="flex flex-col animate-pulse">
          <div class="h-4 my-12 bg-slate-700 rounded col-span-2 w-40"></div>
          <div class="space-y-6">
            <ng-container *ngTemplateOutlet="shimmerCard"></ng-container>
            <ng-container *ngTemplateOutlet="shimmerCard"></ng-container>
          </div>
        </div>
      </div>
    </div>
    <ng-template #shimmerCard>
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div class="collapse-title">
              <div class="flex flex-auto w-fit items-center">
                <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                <div title class="ml-2 h-2 bg-slate-700 rounded col-span-2 w-40 sm:w-[300px]"></div>
              </div>
            </div>
            <div class="collapse-content">
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: [
  ]
})
export class ShimmerComponent {

}
