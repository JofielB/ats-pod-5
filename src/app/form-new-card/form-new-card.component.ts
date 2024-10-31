import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from '../card';

@Component({
  selector: 'app-form-new-card',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './form-new-card.component.html',
  styleUrl: './form-new-card.component.css'
})
export class FormNewCardComponent {
  generalDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet ipsum a justo finibus interdum. Duis eget tellus nec erat finibus dictum. Vivamus sem turpis.';
  local_data : Card[];
  constructor(
    public dialogRef: MatDialogRef<FormNewCardComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Card[]) {
      this.local_data = [...data];
  }

  onNoClick(): void {
    this.dialogRef.close({data:this.local_data});
  }

  profileForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(1)]),
    comment: new FormControl('', [Validators.required, Validators.minLength(1)]),
    category: new FormControl('', [Validators.required, Validators.minLength(1)]),
    url: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  card : Card = {
    id: 0,
    title:"",
    comment:"",
    description:`${this.generalDescription}`,
    type:"",
    photo:""
  };

  setCardValues() {
    this.card.id = this.local_data.length
    this.card.title = this.profileForm.controls['title'].value!;
    this.card.comment = this.profileForm.controls['comment'].value!;
    this.card.type = this.profileForm.controls['category'].value!;
    this.card.photo = this.profileForm.controls['url'].value!;
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.setCardValues();
      this.local_data.push(this.card);
      this.onNoClick();
    }
  }
}
