import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatronsService {

  constructor(private http:HttpClient) { }

  postImage(data:any){
    
    const apiUrl = 'http://127.0.0.1:8000/uploadfile'; // Reemplaza con la URL de tu API

 // 'image' debe coincidir con el nombre del campo en tu API

    return this.http.post<any>(apiUrl, data);

    
    




  }
}
