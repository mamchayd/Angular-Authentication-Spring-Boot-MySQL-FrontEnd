import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddRequete } from 'src/app/Dashboard/GestionRequete/requete/addRequete';
import { AffichRequete } from 'src/app/Dashboard/GestionRequete/requete/affichRequete';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class RequeteService {
  private addReqUrl="http://localhost:8080/api/requete/add";
  private affichReqUrl="http://localhost:8080/api/requete/affich";


  constructor(private http: HttpClient) {
  }

  addRequete(info: AddRequete): Observable<string> {
    return this.http.post<string>(this.addReqUrl, info, httpOptions);
  }

  affichReq(info: AffichRequete ): Observable<any> {
    console.log("affich");
    return this.http.post<any>(this.affichReqUrl,info,httpOptions);
  }

}
