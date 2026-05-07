import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  // 1. variável booleana para controlar o estado
  public isMenuCollapsed = true;

  // 2.  método para alternar o estado
  toggleNavbar() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  ngOnInit(): void {
    // Inicialização do componente
  }
}

