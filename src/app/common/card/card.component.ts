import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            <div class="flex flex-auto items-center">
              <ng-content select="[icon]"></ng-content>
              <ng-content select="[title]"></ng-content>
            </div>
          </div>
          <div class="collapse-content">
            <ng-content select="[details]"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class CardComponent {}
