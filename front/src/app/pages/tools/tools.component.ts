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
  public catForm!: FormGroup;
  public submmited: boolean = false;
  public newPets = this.petsService.petData;
  public newCats = this.petsService.petData;
  public petID = this.petsService.petData._id;
  public catID = this.petsService.petData._id;

  constructor(
    private formBuilder: FormBuilder,
    private petsService: PetsService,
    private catsService: PetsService,
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
    });
    
    this.catForm = this.formBuilder.group({
      breed: [
        this.newCats.breed,
        [Validators.required, Validators.minLength(1)],
      ],
      caracter: [
        this.newCats.caracter,
        [Validators.required, Validators.minLength(1)],
      ],
      hair_type: [
        this.newCats.hair_type,
        [Validators.required, Validators.minLength(1)],
      ],
      size: [this.newCats.size, [Validators.required, Validators.minLength(1)]],
      weight: [
        this.newCats.weight,
        [Validators.required, Validators.minLength(1)],
      ],
      picture: [this.newCats.picture, [Validators.required]],
    });
    this.catForm.valueChanges.subscribe((changes) => {
      this.newCats = changes;
    });
  }
  public onSubmit() {
    if (this.petID !== '') {
      this.petsService.patchPet(this.petID, this.newPets).subscribe();
      console.log(this.newPets);
      alert('Perreke Edited');
    } else {
      this.petsService.postPet(this.newPets).subscribe();
      alert('Perreke Created');
    }

    this.petForm.reset();
    this.router.navigate(['/gallery']);
  }
  public onSubmitGaterre() {
    if (this.catID !== '') {
      this.catsService.patchCat(this.catID, this.newCats).subscribe();
      console.log(this.newCats);
      alert('Gaterre Edited');
    } else {
      this.catsService.postCat(this.newCats).subscribe();
      alert('Gaterre Created');
    }

    this.catForm.reset();
    this.router.navigate(['/catsgallery']);
  }

  public delete() {
    this.petsService.deletePet(this.newPets._id).subscribe();
    this.petsService.clearPet();
    alert('Perreke Eliminado');
    this.router.navigate(['/gallery']);
  }
}
