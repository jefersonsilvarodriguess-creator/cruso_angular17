import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-user-card',
  standalone: false,
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input() user: User =  { nome: '', idade: 0 };

  @Output() userInfoEmitter = new EventEmitter<User>();

  RetornarDados() {
    this.userInfoEmitter.emit(this.user);
  }
}
