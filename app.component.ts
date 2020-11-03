import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpg',
      username: 'nature',
      content: 'I Saws this Awesome  Tree'
    },
    {
      title: ' Snowy Moutain',
      imageUrl: 'assets/moutains.jpg',
      username: 'Moutain lover',
      content: 'I Saws this Awesome  Snowy Moutain'

    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpg',
      username: 'bike raider',
      content: 'I Saws this Awesome  bike riding'

    },
    {
      title: "Flower",
      imageUrl: "assets/flower.jpg",
      username: "suresh",
      content: "this is beatuful flower"
    }

  ]
}
