import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameUpperCase: string = 'juan';
  public nameLowerCase: string = 'JUAN';
  public fullName: string = 'juAn MaNuel';

  public customDate: Date = new Date();
}
