import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {NgModule} from '@angular/core';

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)     // .forChild() is used in all child modules
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
