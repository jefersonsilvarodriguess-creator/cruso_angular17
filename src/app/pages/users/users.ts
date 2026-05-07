import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {

userSelecionado: User | undefined;

userForm: FormGroup = new FormGroup({});

constructor(private fb: FormBuilder, private userService: UserService) {}

ngOnInit(): void {
  this.initializeForm();
}

initializeForm() {
  this.userForm = this.fb.group({
    nome: ['',[Validators.required, Validators.maxLength(250)]],
    idade: ['',[Validators.required, Validators.min(12), Validators.max(110)]],
  });
}

SubmitForm() {
  if (this.userForm.valid) {
    this.users.push(this.userForm.value);
    this.userForm.reset();
  }
}

 users: User[] = [
   { nome: 'Ana Clara', idade: 15 },
   { nome: 'Jeferson', idade: 29 },
   { nome: 'Vinicius', idade: 27 },
   { nome: 'Aluísio', idade: 32 },
 ];

 infoUserSelecionado(user: User) {
    this.userSelecionado = user;
    this.userService.setUser(user);
 }

}
