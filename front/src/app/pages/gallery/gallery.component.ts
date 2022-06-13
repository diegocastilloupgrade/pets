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

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.petsService.getPets().subscribe((data: any) => {
      this.pets = data;
    });
  }
}
