import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { petInterface } from 'src/app/models/petInterface';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public pets: petInterface[] = [];
  public petsFiltrados!: any;
  

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.petsService.getPets().subscribe((data: any) => {
      console.log(data)
      this.pets = data.Perrekes;
      this.petsFiltrados = this.pets;
    });
  }
  public filtrarPet = (valorInput: string) => {
    this.petsFiltrados = this.pets.filter(pet=> {
      return pet.breed.toLowerCase().includes(valorInput.toLowerCase());
    });
    
  }}



