import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ServicosService } from '../servicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;
  listaProdutos: Produto[] = [];
  nomeUsuario: string;

  constructor(public router: Router,
              private servicos: ServicosService) { }

  ngOnInit() {
  }

  identificaUsuario() {
    this.servicos.setLoginUsuario(this.usuario);
    this.servicos.setLoginSenha(this.senha);
    this.router.navigate(['home']);
    //this.router.navigateByUrl('home');
  }
}
