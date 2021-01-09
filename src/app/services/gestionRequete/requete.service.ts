import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddRequete } from 'src/app/Dashboard/GestionRequete/requete/addRequete';
import { AffichRequete } from 'src/app/Dashboard/GestionRequete/requete/affichRequete';
import { ChercheRequete } from 'src/app/Dashboard/GestionRequete/requete/ChercheRequete';
import {DeleteRequete} from 'src/app/Dashboard/GestionRequete/requete/DeleteRequete';
import { AddReponse } from 'src/app/Dashboard/GestionRequete/requete/AddReponse';
import { AffichReponse } from 'src/app/Dashboard/GestionRequete/requete/AfficheReponse';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class RequeteService {
  private addReqUrl="http://localhost:8080/api/requete/add";
  private addReponseUrl="http://localhost:8080/api/reponse/add";
  private affichReqUrl="http://localhost:8080/api/requete/affich";
  private chercheReqUrl="http://localhost:8080/api/requete/chercheRequete";
  private deleteReqUrl="http://localhost:8080/api/requete/delete/";
  private affichReponseUrl="http://localhost:8080/api/reponse/affich";
  private deleteRepUrl="http://localhost:8080/api/reponse/delete/";






  constructor(private http: HttpClient) {
  }

  addRequete(info: AddRequete): Observable<string> {
    return this.http.post<string>(this.addReqUrl, info, httpOptions);
  }

  affichReq(info: AffichRequete ): Observable<any> {
    console.log("affich");
    return this.http.post<any>(this.affichReqUrl,info,httpOptions);
  }
  affichReqByKeyword(info: ChercheRequete ): Observable<any> {
    console.log("affich");
    return this.http.post<any>(this.chercheReqUrl,info,httpOptions);
  }
  deleteRequete(info: number ): Observable<any> {
    console.log(this.deleteReqUrl+info);
    return this.http.delete(this.deleteReqUrl+info);
  }
  deleteReponse(info: number ): Observable<any> {
    console.log(this.deleteReqUrl+info);
    return this.http.delete(this.deleteRepUrl+info);
  }

  addReponse(info: AddReponse): Observable<string> {
    return this.http.post<string>(this.addReponseUrl, info, httpOptions);
  }
  affichReponse(info: AffichReponse ): Observable<any> {
    console.log("affich reponse"+info.idRequete);
    return this.http.post<any>(this.affichReponseUrl,info,httpOptions);
  }

}
