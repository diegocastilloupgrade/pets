import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetsService } from 'src/app/services/pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  @Input() pet!: any;
  public petForm!: FormGroup;
  public submmited: boolean = false;
  public newPets = this.petsService.petData;
  public petID = this.petsService.petData._id;

  constructor(
    private formBuilder: FormBuilder,
    private petsService: PetsService,
    private catsService: PetsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.petsService.clearPet();

    this.petForm = this.formBuilder.group({
      tipomascota: [
        this.newPets.tipomascota,
        [Validators.required, Validators.minLength(1)],
      ],
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
  }
  public onSubmit() {
    console.log('this.newPets.tipomascota', this.newPets.tipomascota);
    if (this.newPets.tipomascota === 'perro') {
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
    } else if (this.newPets.tipomascota === 'gato') {
      if (this.petID !== '') {
        this.catsService.patchCat(this.petID, this.newPets).subscribe();
        console.log(this.newPets);
        alert('Gaterre Edited');
      } else {
        this.catsService.postCat(this.newPets).subscribe();
        alert('Gaterre Created');
      }
      this.petForm.reset();
      this.router.navigate(['/catsgallery']);
    }
  }

  public delete() {
    if (this.newPets.tipomascota === 'perro') {
      this.petsService.deletePet(this.newPets._id).subscribe();
      this.petsService.clearPet();
      alert('Perreke Eliminado');
      this.router.navigate(['/gallery']);
    } else {
      this.petsService.deleteCat(this.newPets._id).subscribe();
      this.petsService.clearPet();
      alert('Gaterre Eliminado');
      this.router.navigate(['/catsgallery']);
    }
  }
}
