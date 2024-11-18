import { Injectable } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class voyageService {
  apiURL: string = 'http://localhost:8080/voyages/api/all';


  voyages! : voyage[]; //un tableau de voyages
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listevoyage(): Observable<voyage[]>{
    return this.http.get<voyage[]>(this.apiURL);
    }

  

     
       
}