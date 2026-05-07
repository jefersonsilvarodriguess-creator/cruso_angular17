import { Component, OnInit, signal } from '@angular/core';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    this.getUser();
  }

  constructor(private userService: UserService) {}

  getUser() {
    const user = localStorage.getItem('user');

    if (user) {
      this.userService.setUser(JSON.parse(user));
    }
  }
}
