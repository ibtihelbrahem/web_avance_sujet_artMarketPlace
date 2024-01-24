import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(private http: HttpClient) { }
  url = 'http://127.0.0.1:3000/artwork/';


  create(artwork:any){
    return this.http.post(this.url + 'ajout' , artwork);
  }
  getArtworkByIdArtist(id: any){
    return this.http.get(this.url + 'getbyidArtist/' + id);
  }
  getArtworkById(id:any){
    return this.http.get(this.url +'getbyid/' + id);
  }
  deleteArtwork(id: any){
    return this.http.delete(this.url + 'supprimer/' + id);
  }
  updateArtwork(id: string, newData: any, newImage: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', newImage);
    formData.append('title', newData.title);
    formData.append('price', newData.price.toString());
    formData.append('tags', newData.tags.join(','));
    formData.append('description', newData.description);

    return this.http.put(this.url +'update/' + id, formData);
  }
}
