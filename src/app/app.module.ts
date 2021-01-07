import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { ParentComponent } from './utilisateur/parent/parent.component';
import { ProfesseurComponent } from './utilisateur/professeur/professeur.component';
import { ConsultantComponent } from './utilisateur/consultant/consultant.component';
import { EtudiantComponent } from './utilisateur/etudiant/etudiant.component';
import { AdminComponent } from './utilisateur/admin/admin.component';
import { UserComponent } from './utilisateur/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ParentComponent,
    ProfesseurComponent,
    ConsultantComponent,
    EtudiantComponent,
    AdminComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
