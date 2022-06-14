import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetsService } from 'src/app/services/pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  public petForm!: FormGroup;
  public submmited: boolean = false;
  public newPets = this.petsService.petData;
  public petID = this.petsService.petData.id;

  constructor(
    private formBuilder: FormBuilder,
    private petsService: PetsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.petsService.clearPet();

    this.petForm = this.formBuilder.group({
      breed: [
        this.newPets.breed,
        [Validators.required, Validators.minLength(1)],
      ],
      caracter: [
        this.newPets.caracter,
        [Validators.required, Validators.minLength(1)],
      ],
      hair_type: [
        this.newPets.hair_type,
        [Validators.required, Validators.minLength(1)],
      ],
      size: [this.newPets.size, [Validators.required, Validators.minLength(1)]],
      weight: [
        this.newPets.weight,
        [Validators.required, Validators.minLength(1)],
      ],
      picture: [this.newPets.picture, [Validators.required]],
    });

    this.petForm.valueChanges.subscribe((changes) => {
      this.newPets = changes;
     
    })
  }
  public onSubmit(){
    
    if(this.petID !== ""){
      this.petsService.putPet(this.petID, this.newPets).subscribe()
      alert("Perreke Edited")
    } else  {
      this.petsService.postPet(this.newPets).subscribe()
      alert("Perreke Created")
    }
    
    this.petForm.reset();
  this.router.navigate(["/gallery"])
    
    

  }

  public delete(){
    this.petsService.deletePet(this.newPets.id).subscribe();
    this.petsService.clearPet();
    alert ("Perreke Eliminado")
    this.router.navigate(["/gallery"]);
    
  }

  
}
