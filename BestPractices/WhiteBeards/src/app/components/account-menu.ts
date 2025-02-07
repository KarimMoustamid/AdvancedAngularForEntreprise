import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IUser} from "../services/user.model";

@Component({
  selector: 'account-menu',
  styleUrls: ['../styles/account-menu.css'],
  template: `
    <div class="account">
    <span class="welcome" *ngIf="user">
    </span>
    </div>`
})
export class AccountMenuComponent {
  // REMEMBER : I am here
  @Input() user;

}
