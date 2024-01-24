import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtworkService } from '../services/artwork.service';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-modifier-artwork',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FormsModule,FooterComponent],
  templateUrl: './modifier-artwork.component.html',
  styleUrl: './modifier-artwork.component.css'
})
export class ModifierArtworkComponent implements OnInit {
artwork: any ;
id: any;
tag: any = '';
image: any;

select(e:any){
  this.image = e.target.files[0];
  this.id = this.act.snapshot.paramMap.get('id');
  this.art.getArtworkById(this.id)
  .subscribe(
    res=>{
      this.artwork = res ;
   
      
    },
    err=>{
      console.log(err);
    }
  )

}
constructor(private act: ActivatedRoute , private art: ArtworkService, private router:Router){}

updateArtwork(): void {
 
  if (!this.image) {
    this.image = this.artwork.image;
  }

  this.art.updateArtwork(this.id, this.artwork, this.image)
    .subscribe(
      res => {
        console.log('Artwork updated successfully:', res);
        this.router.navigate(['/myaccount', this.artwork.idArtist]);
      },
      error => {
        console.error('Error updating artwork:', error);
      }
    );
}


ngOnInit(): void {
  this.id = this.act.snapshot.paramMap.get('id');
  this.art.getArtworkById(this.id)
  .subscribe(
    res=>{
      this.artwork = res ;
   
      
    },
    err=>{
      console.log(err);
    }
  )
}
}
