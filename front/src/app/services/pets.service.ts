import { petInterface } from 'src/app/models/petInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private httpClient: HttpClient) { }

  public petData = {
    breed: "",
        caracter: "",
        hair_type: "",
        size: "",
        weight: "",
        picture: "",
        id: ""

  }

  public clearPet () {
    this.petData = {
      breed: "",
      caracter: "",
      hair_type: "",
      size: "",
      weight: "",
      picture: "",
      id: ""
    }
  }

  public editItem(item: any) {
    this.petData = item;
  }

  public getPets() {
    return this.httpClient.get("http://localhost:3000/pets")
  }
public postPet(newPet: any){
  return this.httpClient.post("http://localhost:3000/pets", newPet)
  
}  

public putPet( petID: any, editedPet: any) {
  return this.httpClient.put("http://localhost:3000/pets/" + petID, editedPet )
}



public deletePet(petID: any) {
  return this.httpClient.delete("http://localhost:3000/pets/" + petID)
}



}
