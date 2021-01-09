import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../auth/token-storage.service';
import {AddRequete} from'../requete/addRequete';
import {AddReponse} from'../requete/AddReponse';
import {AffichRequete} from'../requete/affichRequete';
import {AffichReponse} from'../requete/AfficheReponse';

import {ChercheRequete} from'../requete/ChercheRequete';
import {RequeteService} from '../../../services/gestionRequete/requete.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-requete',
  templateUrl: './requete.component.html',
  styleUrls: ['./requete.component.css']
})
export class RequeteComponent implements OnInit {

  info: any;
  form:any={};
  formIdReuete:any={};
  formReponse:any={};
  isAdd = false;
  isAddFailed = false;
  isAffich = false;
  isAffichFailed = false;
  errorMessage = '';
  idRequet:number=0;
  //size:number=5;
  //cuurrentPage:number=0;


  private addRequete:AddRequete;
  private addReponse:AddReponse;
  private chercheRequete:ChercheRequete;
  private affichRequete:AffichRequete;
  private affichReponse:AffichReponse;
  deleteReqUrl="http://localhost:8080/ api/requete/delete/";
  private deleteRepUrl="http://localhost:8080/api/reponse/delete/";

  listeRequete:any;
  listeReponse:any;

  constructor(private http: HttpClient,private token: TokenStorageService, private requeteService:RequeteService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  onChercher(form:any){
      console.log(form);
      this.chercheRequete=new ChercheRequete(
        form.Keyword
      )
      this.requeteService.affichReqByKeyword(this.chercheRequete).subscribe(
        data=>{         
          this.listeRequete=data;  
          this.isAffich = true;
          this.isAffichFailed = false;
        }, error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isAffichFailed = true;
        }
        
      )
  }
  onGetRequetes(){
    this.affichRequete = new AffichRequete(
      this.token.getUsername(),
    //  this.cuurrentPage,
     // this.size
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

  onDeleteRequete(req){
    let conf=confirm("Etes vous sure ?");
    
    if(conf){
      
      this.requeteService.deleteRequete(req.id).subscribe(
       data=>{
        this.onGetRequetes();
       },err=>{
        console.log("erre");
       } 
      )

    }

  }


  onSubmit() {

   this.addRequete = new AddRequete(
      this.form.name,
      this.form.prenom,
      this.form.email,
      this.form.type,
      this.form.titre,
      this.form.description,
      this.token.getUsername(),
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
 

  onAddReponse(){
 
    this.addReponse=new AddReponse(
      this.formReponse.id,
      this.formReponse.email,
      this.formReponse.titre,
      this.formReponse.description   
    );
    this.requeteService.addReponse(this.addReponse).subscribe(
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

    onGetReponse(){
      this.affichReponse = new AffichReponse(
        this.formIdReuete.idRequete
      );
      this.requeteService.affichReponse(this.affichReponse).subscribe(
        
        data=>{
          data.forEach(function(e){console.log(e)});
          this.listeReponse=data;  
          this.listeReponse.forEach(function(e){console.log(e)});
      
        }, error => {
          console.log(error);
          this.errorMessage = error.error.message;
    
        }
        
      )
      
    }

    onDeleteReponse(rep){
      let conf=confirm("Etes vous sure ?");
      
      if(conf){
        
        this.requeteService.deleteReponse(rep.id).subscribe(
         data=>{
          this.onGetReponse();
         },err=>{
          console.log("erre");
         } 
        )
  
      }
  
    }
  }


