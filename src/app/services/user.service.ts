import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private etudiantUrl = 'http://localhost:8080/api/test/etudiant';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private professeurUrl = 'http://localhost:8080/api/test/professeur';
  private parentUrl = 'http://localhost:8080/api/test/parent';
  private consultantUrl = 'http://localhost:8080/api/test/consultant';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getEtudiantBoard(): Observable<string> {
    return this.http.get(this.etudiantUrl, { responseType: 'text' });
  }

  getParentBoard(): Observable<string> {
    return this.http.get(this.parentUrl, { responseType: 'text' });
  }

  getProfesseurBoard(): Observable<string> {
    return this.http.get(this.professeurUrl, { responseType: 'text' });
  }

  getConsultantBoard(): Observable<string> {
    return this.http.get(this.consultantUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
