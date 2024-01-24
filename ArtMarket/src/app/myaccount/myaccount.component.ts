import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../services/auth.service';
import { ArtworkService } from '../services/artwork.service';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-myaccount',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent,FooterComponent],
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.css'
})
export class MyaccountComponent implements OnInit {
  id : any;
  artist:any;
  artworks: any;
  constructor(private router: Router , private act: ActivatedRoute, private new_artist: AuthService, private artwork :ArtworkService) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this.new_artist.getArtistNameById(this.id)
    .subscribe(
      res=>{
        this.artist = res;
      }
    );
    this.artwork.getArtworkByIdArtist(this.id)
      .subscribe(
        res=>{
          this.artworks = res ;
        },
        err=>{
          console.log(err);
        }
      )
  }
  navigateToCreationArt(): void {
    this.router.navigate(['/addArt']);
  }
  deleteArtworkById(id: any) {
    this.artwork.deleteArtwork(id).subscribe(
      (res) => {
        
        
        this.refreshArtworks();
      },
      (err) => {
        
        console.error(err);
      }
    );
  }
  refreshArtworks() {
    // Call the method to fetch artworks again after deletion
    this.artwork.getArtworkByIdArtist(this.id).subscribe(
      (res) => {
        this.artworks = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
