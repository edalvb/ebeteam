import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MatIconRegistry } from '@angular/material/icon';

import { map } from "rxjs/operators";
import { DomSanitizer } from '@angular/platform-browser';

const LOGIN = gql`
  mutation loguear(
      $email: String!,
      $contrasena: String!) {
    
        login(input: { 
          identifier: $email, 
          password: $contrasena
        }) {
          jwt
        }

  }
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() setOption = new EventEmitter;

  constructor(private apollo: Apollo, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.agregarIcono('osiptel-v', iconRegistry, sanitizer)
  }
  
  agregarIcono(nombre: string, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      nombre,
      sanitizer.bypassSecurityTrustResourceUrl(`/assets/img/${nombre}.svg`));
  }

  ngOnInit(): void {
  }

  login(email: String, password: String) {
    this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        email: email,
        contrasena: password
      }
    }).subscribe((res: any) => {
      localStorage.setItem('token', `${res.data.login.jwt}`);
      console.log(localStorage.getItem('token'));
    });
  }

  cancel() {
    this.setOption.emit('1');
  }

  logup() {
    this.setOption.emit('3');
  }

}
