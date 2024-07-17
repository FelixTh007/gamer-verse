import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPrincipalComponent } from './index-principal/index-principal.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
//import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
//import { SignInComponent } from './sign-in/sign-in.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : '', component : IndexPrincipalComponent},
  {path : 'acceuil' , component : AcceuilComponent},
  /*{path : 'login' , component : LoginComponent},*/
  {path : 'message', component : MessageComponent},
  /*{path : 'sign', component : SignInComponent},*/
  {path : 'profil', component : ProfilUserComponent},
  {path:'**', component : PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
