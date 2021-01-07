import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_ETUDIANT') {
          this.authority = 'etudiant';
          return false;
        } else if (role === 'ROLE_PROFESSEUR') {
          this.authority = 'professeur';
          return false;
        }else if (role === 'ROLE_CONSULTANT') {
          this.authority = 'consultant';
          return false;
        }else if (role === 'ROLE_PARENT') {
          this.authority = 'parent';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}
