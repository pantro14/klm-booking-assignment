import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="navbar sticky top-0 z-50 flex justify-center bg-[url('/assets/img/af_pattern_bg.png')]">
      <a class="text-xl py-4 text-white"
         href="/check-in">CHECK-IN</a>
    </header>
  `
})
export class NavBarComponent {}
