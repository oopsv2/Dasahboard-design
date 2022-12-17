import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  editForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<LandingPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, value: string }[],
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      'name': new FormControl(''),
      'domain': new FormControl(''),
      'gender': new FormControl(''),
      'dob': new FormControl(''),
      'tel': new FormControl('', [Validators.minLength(10), Validators.maxLength(12)]),
      'location': new FormControl('')
    })
    console.log();

    this.editForm.patchValue({
      'name': this.data[0].value,
      'domain': this.data[1].value,
      'gender': this.data[2].value,
      'dob': new Date(this.data[3].value),
      'tel': this.data[4].value.includes('+91') ? this.data[4].value : '+91' + this.data[4].value,
      'location': this.data[5].value,
    })
    // this.data.forEach((item, index) => this.formLabels[index] = item.value)
  }

  submit() {
    this.dialogRef.close(this.editForm.value)
  }

}
