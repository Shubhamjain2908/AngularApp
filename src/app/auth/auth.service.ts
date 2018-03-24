import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (tk: string) => this.token = tk
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    // It provides token asynchronously
    firebase.auth().currentUser.getToken()
      .then(
          (tk: string) => this.token = tk
        );
    return this.token;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
