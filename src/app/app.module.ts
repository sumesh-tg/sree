import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/body/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountdownConfig, CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';
import { PrintComponent } from './components/samples/print/print.component';
import { NgxPrintModule } from 'ngx-print';

export function countdownConfigFactory(): CountdownConfig {
  return {};
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PrintComponent
  ],
  imports: [
    NgxPrintModule,
    BrowserModule,
    CarouselModule,
    CountdownModule, 
    AppRoutingModule
  ],
  providers: [{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }
