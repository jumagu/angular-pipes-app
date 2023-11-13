import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    public appService: AppService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  public toggleTheme() {
    if (this.appService.theme.name === 'soho-light.theme') {
      this.appService.theme = {
        name: 'soho-dark.theme',
        icon: 'pi pi-sun',
      };
    } else {
      this.appService.theme = {
        name: 'soho-light.theme',
        icon: 'pi pi-moon',
      };
    }

    this.appService.switchTheme(this.appService.theme);
  }
}
