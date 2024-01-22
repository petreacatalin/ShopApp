import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imageArray: string[] = [];

  constructor() {
    this.fetchImages();
  }

  fetchImages() {
    const imagePath = 'assets/images/components/';
    const numberOfImages = 13;

    for (let i = 1; i <= numberOfImages; i++) {
      this.imageArray.push(`${imagePath}${i}.jpg`);
    }
  }

}
