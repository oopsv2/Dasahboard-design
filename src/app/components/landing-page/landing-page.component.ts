import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  values = [
    {
      title: 'Name',
      value: 'Mary, Jason & Hodge of Attorney'
    },
    {
      title: 'Domain',
      value: 'www.mhattorenys.com'
    },
    {
      title: 'Gender',
      value: 'Male'
    },
    {
      title: 'Date Of Birth',
      value: '8 June 1979'
    },
    {
      title: 'Phone Number',
      value: '8654321234'
    },
    {
      title: 'Location',
      value: '12 street, Silicon Valley, Avenue NE, Hunsville'
    }]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openeditDialogBox(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: this.values
    });

    dialogRef.afterClosed().subscribe(res => {
      Object.entries(res).forEach((element: Date | any, ind) => {
        if (ind === 3) {
          let curr = new Date(element[1]);
          this.values[ind].value = curr.getDate() + ' ' + this.month[curr.getMonth()] + ' ' + curr.getFullYear()
        }
        else {
          this.values[ind].value = element[1]
        }
      });
    })
  }

}
