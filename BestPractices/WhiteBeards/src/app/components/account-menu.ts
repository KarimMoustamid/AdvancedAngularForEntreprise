import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IUser} from "../services/user.model";

@Component({
  selector: 'account-menu',
  styleUrls: ['../styles/account-menu.css'],
  template: `
    <div class="account componentBorders">
    <span class="welcome" *ngIf="user">
      Welcome {{user.firstName}}
    </span>
    </div>`
})
export class AccountMenuComponent {

  @Input() user: IUser | null = null;

}
