import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

// Locale Configuration
import localeDeCH from '@angular/common/locales/de-CH';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeDeCH);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule,
  ],
  providers: [
    /* {
      provide: LOCALE_ID,
      useValue: 'de-CH',
    }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
