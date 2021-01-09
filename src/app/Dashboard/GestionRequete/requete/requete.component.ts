import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../auth/token-storage.service';
import {AddRequete} from'../requete/addRequete';
import {AffichRequete} from'../requete/affichRequete';
import {RequeteService} from '../../../services/gestionRequete/requete.service';

@Component({
  selector: 'app-requete',
  templateUrl: './requete.component.html',
  styleUrls: ['./requete.component.css']
})
export class RequeteComponent implements OnInit {

  info: any;
  form:any={};
  isAdd = false;
  isAddFailed = false;
  isAffich = false;
  isAffichFailed = false;
  errorMessage = '';

  private addRequete:AddRequete;
  private affichRequete:AffichRequete;
  listeRequete:any;

  constructor(private token: TokenStorageService, private requeteService:RequeteService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  onGetRequetes(){
    this.affichRequete = new AffichRequete(
      this.token.getUsername()
    );
  

    this.requeteService.affichReq(this.affichRequete).subscribe(
      data=>{
        data.forEach(function(e){console.log(e)});
       
        this.listeRequete=data;  
        this.listeRequete.forEach(function(e){console.log(e)});
        this.isAffich = true;
        this.isAffichFailed = false;
      }, error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isAffichFailed = true;
      }
      
    )


  }
  onSubmit() {

   this.addRequete = new AddRequete(
      this.form.name,
      this.form.prenom,
      this.form.email,
      this.form.type,
      this.form.titre,
      this.form.description
   );

   this.requeteService.addRequete(this.addRequete).subscribe(
    data => {
      console.log("data "+data);
      this.isAdd = true;
      this.isAddFailed = false;
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
      this.isAddFailed = true;
    }
  );
  }

}
