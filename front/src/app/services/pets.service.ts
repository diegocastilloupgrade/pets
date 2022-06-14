import { petInterface } from 'src/app/models/petInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private httpClient: HttpClient) { }

  public petData = {
    breed: "Raza del perreke",
        caracter: "...",
        hair_type: "tipo de lope",
        size: "TAMAÑO",
        weight: "cuantos kilates",
        picture: "https://us.123rf.com/450wm/damedeeso/damedeeso1206/damedeeso120600018/14098767-perro-pidiendo-con-un-signo-de-interrogaci%C3%B3n-en-la-parte-superior.jpg",
        id: ""

  }

  public getPets() {
    return this.httpClient.get("http://localhost:3000/pets")
  }
public postPet(newPet: any){
  return this.httpClient.post("http://localhost:3000/pets", newPet)
  
}  

public editPet(editedPet: any, petID: any) {
  return this.httpClient.put("http://localhost:3000/pets/"+ petID, editedPet )
}

}
