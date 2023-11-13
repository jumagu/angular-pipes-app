import { Injectable, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';

interface Theme {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public theme: Theme = {
    name: 'soho-light.theme',
    icon: 'pi pi-moon',
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme) {
      const newTheme: Theme = JSON.parse(localStorageTheme);

      this.theme = newTheme;

      this.switchTheme(newTheme);
    }
  }

  public switchTheme(theme: Theme): void {
    localStorage.setItem('theme', JSON.stringify(theme));

    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme.name + '.css';
    }
  }
}
