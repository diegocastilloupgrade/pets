import { AppRoutingModule } from './../../app-routing.module';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { petInterface } from 'src/app/models/petInterface';
import { catInterface } from 'src/app/models/petInterface';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public pets: petInterface[] = [];
  public petsFiltrados!: any;
  public cats: catInterface[] = [];

  constructor(private petsService: PetsService, private router: Router) {
    console.log(router.url);
  }

  ngOnInit(): void {
    console.log('esto es approutingmodule');
    if (this.router.url === "/gallery") {
      this.petsService.getPets().subscribe((data: any) => {
        console.log("estos son mis datos de perros",data);
        this.pets = data.Perrekes;
        this.petsFiltrados = this.pets;
      });      
    } 
    if (this.router.url === "/catsgallery") {
      this.petsService.getCats().subscribe((data: any) => {
        console.log("estos son mis datos de gatos",data);
        this.pets = data.Gaterres;
        this.petsFiltrados = this.pets;
      });
    }
  }
  public filtrarPet = (valorInput: string) => {
    this.petsFiltrados = this.pets.filter((pet) => {
      return pet.breed.toLowerCase().includes(valorInput.toLowerCase());
    });
  };
}
