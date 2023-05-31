import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="navbar sticky top-0 z-50 flex justify-center bg-[url('/assets/img/af_pattern_bg.png')]">
      <button class="text-xl py-4 text-white"
        (click)="goHome()">CHECK-IN</button>
    </header>
  `
})
export class NavBarComponent {

  constructor(
    private router: Router
  ) {}

  goHome(): void {
    this.router.navigate(['/check-in']);
  }
}
