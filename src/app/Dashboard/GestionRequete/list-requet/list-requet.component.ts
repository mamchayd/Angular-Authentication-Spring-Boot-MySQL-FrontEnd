import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../../../auth/token-storage.service';


@Component({
  selector: 'app-list-requet',
  templateUrl: './list-requet.component.html',
  styleUrls: ['./list-requet.component.css']
})
export class ListRequetComponent implements OnInit {
  info: any;

  
  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }
  onGetRequetes(){
    
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
