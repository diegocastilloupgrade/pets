import { PetsService } from 'src/app/services/pets.service';
import { petInterface } from './../../../../models/petInterface';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {
  @Input() public pet!: any;
  
  constructor(private petsService: PetsService, private router: Router) { }
  
  ngOnInit(): void {
  }
  
  public editPet(pet:any){
    this.petsService.editItem(pet);
    this.router.navigate(["/tools"]);
  }
  // public editCat(cat:any){
  //   this.catsService.editItem(cat);
  //   this.router.navigate(["/tools"]);
  // }

  
  
}
