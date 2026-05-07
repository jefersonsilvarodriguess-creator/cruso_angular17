import { Component, DoCheck, inject, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Subscription } from 'rxjs';
import { UserGit } from '../../_models/userGit';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  user: UserGit | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getGitUser();
  }

  getGitUser() {
  this.userService.getGithubUser('bitcoin').subscribe(
    (response: UserGit) => {
      this.user = response;
    },
  );
  }
}
