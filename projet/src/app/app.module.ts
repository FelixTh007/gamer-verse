import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MessageComponent } from './message/message.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { IndexPrincipalComponent } from './index-principal/index-principal.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MiniMessageComponent } from './mini-message/mini-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicationComponent } from './publication/publication.component';
import { OptionsComponent } from './options/options.component';

import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    MessageComponent,
    AcceuilComponent,
    IndexPrincipalComponent,
    ProfilUserComponent,
    NavBarComponent,
    MiniMessageComponent,
    PageNotFoundComponent,
    PublicationComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerComponent,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
