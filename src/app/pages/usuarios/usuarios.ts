import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: false, // Mantendo conforme seu padrão anterior
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios implements OnInit {
  // 1. Usando o inject() em vez do constructor
  private route = inject(ActivatedRoute);

  username: string | null = '';

  ngOnInit(): void {
    this.getNome();
  }

  getNome() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }
}
