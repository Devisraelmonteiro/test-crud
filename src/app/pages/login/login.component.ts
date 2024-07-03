import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { FormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'] // Corrigido: styleUrl para styleUrls
    ,
    imports: [CommonModule, ButtonComponent,FormsModule]
})
export class LoginComponent  {

useName :string;

//constructor(private rota: Router){ }

//login(){
  //sessionStorage.setItem('user', this.useName)

  //this.rota.navigate(['home']);
}

//}
