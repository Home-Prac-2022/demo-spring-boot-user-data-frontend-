import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./shared/auth.guard";
import {UserProfileComponentComponent} from "./user-profile-component/user-profile-component.component";

const routes: Routes = [
  {path: '', redirectTo: '/login',pathMatch:'full'},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  { path: 'user-profile/:id', component: UserProfileComponentComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
