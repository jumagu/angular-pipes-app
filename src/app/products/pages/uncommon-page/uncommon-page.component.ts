import { Component } from '@angular/core';

import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  /*************************************** Properties ***************************************/
  // i18nSelect
  public name: string = 'José';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invite him',
    female: 'invite her',
  };

  // i18nPlural
  public clients: string[] = ['Juan', 'Pedro', 'María', 'Jesus', 'Pablo'];
  public clientsMap = {
    '=1': 'is',
    other: 'are',
  };
  public clientsQuantityMap = {
    '=0': 'no clients',
    '=1': 'one client',
    other: '# clients',
  };

  // Slice
  public names: string[] = ['Ana', ' Carlos', ' Elena', ' David', ' Isabel'];

  // KeyValue
  public person = {
    name: 'Juan',
    age: 21,
    email: 'juan@gmail.com',
    isActive: true,
    city: 'Tunja, Colombia',
    birthday: 'June 11',
    hobby: 'Play Videogames',
    profession: 'Systems Engineer',
  };

  // Async
  public myObservableTimer: Observable<number> = interval(1000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data in the promise!');
    }, 2000);
  });

  /***************************************** Methods ****************************************/
  // i18nSelect
  public changeName(): void {
    if (this.name === 'José') {
      this.name = 'María';
      this.gender = 'female';
    } else {
      this.name = 'José';
      this.gender = 'male';
    }
  }

  // i18nPlural
  public deleteClient(): void {
    this.clients.shift();
  }
}
