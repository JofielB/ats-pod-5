import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { Card } from '../card';
import { FormNewCardComponent } from '../form-new-card/form-new-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, CardComponent, NavMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public dialog: MatDialog){}

  generalDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet ipsum a justo finibus interdum. Duis eget tellus nec erat finibus dictum. Vivamus sem turpis.';

  cardList: Card[] = [
    {
      id: 3,
      title: 'First Kickoff',
      comment: 'NFL',
      description: `${this.generalDescription}`,
      type: 'Sports',
      photo: `https://th.bing.com/th/id/R.d78b60478e13fc107b864259faae40db?rik=8PzuI79sr%2fTCIg&riu=http%3a%2f%2fimages.alphacoders.com%2f592%2f592115.jpg&ehk=Xe8b6zKlRlw%2fhcinrGXZNwLuMO2cPUxUWpZTRUV2ifc%3d&risl=&pid=ImgRaw&r=0`,
    },
    {
      id: 1,
      title: 'Burgers of the Century',
      comment: 'Burger town',
      description: `${this.generalDescription}`,
      type: 'Food',
      photo: `https://th.bing.com/th/id/OIP.S9t2BXxzAQQVcGVY9q0czgHaFj?rs=1&pid=ImgDetMain`,
    },
    {
      id: 2,
      title: 'The Big 4 Tournament',
      comment: 'Futbol tournament',
      description: `${this.generalDescription}`,
      type: 'Sports',
      photo: `https://periodicocorreo.com.mx/__export/sites/correo/img/2024/02/04/estadio-azteca-168432079.jpg`,
    },
    {
      id: 4,
      title: 'Old Movies are Back',
      comment: 'Movie Theather',
      description: `${this.generalDescription}`,
      type: 'Movies',
      photo: `https://www.gannett-cdn.com/presto/2020/01/24/POEN/5d2fc27d-26f6-4ede-b8e4-36a9bd999fd4-GettyImages-171150659.jpg`,
    },
    {
      id: 5,
      title: 'The CES is Back',
      comment: 'Consumer Technology Association',
      description: `${this.generalDescription}`,
      type: 'Technology',
      photo: `https://th.bing.com/th/id/R.c49de38e4b8180ca0eec767966c8bb5f?rik=rnKVL%2bW5csrd9g&pid=ImgRaw&r=0`,
    },
    {
      id: 0,
      title: 'The Curry Fest',
      comment: 'National curry',
      description: `${this.generalDescription}`,
      type: 'Food',
      photo: `https://www.sundaypost.com/wp-content/uploads/sites/13/2018/10/iStock-843820560.jpg`,
    },
    {
      id: 6,
      title: 'NVIDIA AI Summit',
      comment: 'AI',
      description: `${this.generalDescription}`,
      type: 'Technology',
      photo: `https://th.bing.com/th/id/OIP.EkC6lVHAysdwtp-R58RlmAHaE7?rs=1&pid=ImgDetMain`,
    },
    {
      id: 7,
      title: 'The Game Awards',
      comment: 'Game Awards 10th Anniversary',
      description: `${this.generalDescription}`,
      type: 'Games',
      photo: `https://th.bing.com/th/id/R.2f3956d96dc524d78b12563353c113eb?rik=%2bcBb%2bXIM0KDzGQ&pid=ImgRaw&r=0`,
    },
  ];

  openDialog(): void{
    const dialogRef = this.dialog.open(FormNewCardComponent, 
      {
        data: this.cardList
      });

      dialogRef.afterClosed().subscribe(result => {
        this.cardList = result.data
      })
  }
}
