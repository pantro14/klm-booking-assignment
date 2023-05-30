import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarComponent} from './common/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavBarComponent,
        HttpClientModule,
        ApolloModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
