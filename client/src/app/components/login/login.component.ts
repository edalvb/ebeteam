import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { map } from "rxjs/operators";

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

  constructor(private apollo: Apollo) { }

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
      localStorage.setItem('token', res.data.login.jwt);
      console.log(localStorage.getItem('token'));
    });
  }

}
