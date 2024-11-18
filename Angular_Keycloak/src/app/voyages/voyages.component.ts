import { Component, OnInit } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { voyageService } from '../services/voyage.service';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  
})
export class voyagesComponent implements OnInit {

     voyages! : voyage[]; 
     
     constructor(private voyageService: voyageService ) {
      
      }
   

      ngOnInit(): void {

        this.chargervoyages();
      }
    
      chargervoyages(){
        this.voyageService.listevoyage().subscribe(prods => {
          console.log(prods);
          this.voyages = prods;
          });
      }
   

 
  

}
