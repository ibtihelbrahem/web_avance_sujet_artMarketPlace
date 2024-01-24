import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showSearchBar = false;
  
  constructor( public new_artist:AuthService){}

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
   

  }

  toggleUserIcon() {
    this.showSearchBar = false;
   
  }
  logout() {
    this.new_artist.logout();
  }
 
  
}
