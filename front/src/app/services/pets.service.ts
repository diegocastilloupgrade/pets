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
        _id: ""

  }


  public clearPet () {
    this.petData = {
      breed: "",
      caracter: "",
      hair_type: "",
      size: "",
      weight: "",
      picture: "",
      _id: ""
    }
  }

  public editItem(item: any) {
    this.petData = item;
  }

  public getPets() {
    return this.httpClient.get("http://localhost:8002/pets")
  }
public postPet(newPet: any){
  return this.httpClient.post("http://localhost:8002/pets", newPet)
  
}  

public patchPet( petID: any, editedPet: any) {
  return this.httpClient.patch("http://localhost:8002/pets/" + petID, editedPet )
}



public deletePet(petID: any) {
  return this.httpClient.delete("http://localhost:8002/pets/" + petID)
}




}
