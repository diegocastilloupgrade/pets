import { petInterface } from 'src/app/models/petInterface';
import { catInterface } from 'src/app/models/petInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PetsService {
  constructor(private httpClient: HttpClient) {}
  public edition:boolean = false;
  public petData = {
    tipomascota: '',
    breed: '',
    caracter: '',
    hair_type: '',
    size: '',
    weight: '',
    picture: '',
    _id: '',
  };

  public clearPet() {
    this.petData = {
      tipomascota:'',
      breed: '',
      caracter: '',
      hair_type: '',
      size: '',
      weight: '',
      picture: '',
      _id: '',
    };
  }

  public editItem(item: any) {
    this.petData = item;
    this.edition = true;
  }

  public getPets() {
    return this.httpClient.get('http://localhost:8002/pets');
  }
  public getCats() {
    return this.httpClient.get('http://localhost:8002/cats');
  }
  public postPet(newPet: any) {
    return this.httpClient.post('http://localhost:8002/pets', newPet);
  }
  public postCat(newCat: any) {
    return this.httpClient.post('http://localhost:8002/cats', newCat);
  }
  public patchPet(petID: any, editedPet: any) {
    return this.httpClient.patch(
      'http://localhost:8002/pets/' + petID,
      editedPet
    );
  }
  public patchCat(catID: any, editedCat: any) {
    return this.httpClient.patch(
      'http://localhost:8002/cats/' + catID,
      editedCat
    );
  }

  public deletePet(petID: any) {
    return this.httpClient.delete('http://localhost:8002/pets/' + petID);
  }
  public deleteCat(petID: any) {
    return this.httpClient.delete('http://localhost:8002/cats/' + petID);
  }
}
