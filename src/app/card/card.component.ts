import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../card';
import { FormEditCardComponentComponent } from '../form-edit-card-component/form-edit-card-component.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card
  constructor(public dialog: MatDialog){}
  
  openDialog(): void{
    const dialogRef = this.dialog.open(FormEditCardComponentComponent, 
      {
        data: this.card
      });

      dialogRef.afterClosed().subscribe(result => {
        this.card = result.data;
      })
  }
}
