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
  selector: 'app-form-edit-card-component',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './form-edit-card-component.component.html',
  styleUrl: './form-edit-card-component.component.css'
})
export class FormEditCardComponentComponent {

  generalDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet ipsum a justo finibus interdum. Duis eget tellus nec erat finibus dictum. Vivamus sem turpis.';
  local_data : Card;
  profileForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(1)]),
    comment: new FormControl('', [Validators.required, Validators.minLength(1)]),
    category: new FormControl('', [Validators.required, Validators.minLength(1)]),
    url: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  constructor(
    public dialogRef: MatDialogRef<FormEditCardComponentComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Card) {
      this.local_data = data;
      this.profileForm.controls['title'].setValue(data.title);
      this.profileForm.controls['comment'].setValue(data.comment);
      this.profileForm.controls['category'].setValue(data.type);
      this.profileForm.controls['url'].setValue(data.photo);
  }
  

  onSubmit() {
    if (this.profileForm.valid) {
      this.local_data.title = this.profileForm.controls['title'].value!;
      this.local_data.comment = this.profileForm.controls['comment'].value!;
      this.local_data.type = this.profileForm.controls['category'].value!;
      this.local_data.photo = this.profileForm.controls['url'].value!;
      this.dialogRef.close({data:this.local_data});
    }
  }

  onNoClick(): void {
    this.dialogRef.close({data:this.local_data});
  }
}
