import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cm-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {
    let year: any = window.location.pathname.match(/\d{4}/g);

    year = year ? parseInt(year[0], 10) : null;

    console.log(year);
  }

}
