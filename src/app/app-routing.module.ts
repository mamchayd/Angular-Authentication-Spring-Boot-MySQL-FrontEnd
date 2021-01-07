import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './utilisateur/user/user.component';
import {EtudiantComponent} from './utilisateur/etudiant/etudiant.component'
import { ConsultantComponent } from './utilisateur/consultant/consultant.component';
import { ParentComponent } from './utilisateur/parent/parent.component';
import { ProfesseurComponent } from './utilisateur/professeur/professeur.component';
import { AdminComponent } from './utilisateur/admin/admin.component';


const routes: Routes = [
    {path: 'home',component: HomeComponent  },
    {path: 'user', component: UserComponent },
    {path: 'admin', component: AdminComponent },
    {path: 'professeur', component: ProfesseurComponent },
    {path: 'parent', component: ParentComponent },
    {path: 'consultant', component: ConsultantComponent },
    {path: 'etudiant', component: EtudiantComponent },
    {path: 'auth/login', component: LoginComponent},
    {path: 'signup', component: RegisterComponent },
    {path: '',redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
