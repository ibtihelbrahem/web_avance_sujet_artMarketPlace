import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ArtworkService } from '../services/artwork.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-creation-art',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule,RouterModule,FooterComponent],
  templateUrl: './creation-art.component.html',
  styleUrl: './creation-art.component.css'
})
export class CreationArtComponent implements OnInit {
  artwork: any ={
    title:'',
    price:'',
    content:'',
    tags:[],
    description:''
  }
 
  tag: any = '';

  image: any;
  
  select(e:any){
    this.image = e.target.files[0];
  }


constructor(private router: Router ,private new_artist: AuthService, private new_artwork: ArtworkService){}

  ngOnInit(): void {
    
  }
  create(){
    let fd= new FormData()
    fd.append('title', this.artwork.title)
    fd.append('price', this.artwork.price.toString())
    fd.append('tags', this.artwork.tags.toString()) 
    fd.append('description', this.artwork.description) 
    fd.append('image', this.image) 
    const userId = this.new_artist.getUserIdFromToken() ?? '';
    fd.append('idArtist', userId);

    this.new_artwork.create(fd)
    .subscribe(
      res=>{
        this.router.navigate(['/'])
      },
      err=>{
        console.log(err);
      }
    )
  }
}
