import { Component } from '@angular/core';

@Component({
  selector: 'sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedData: any;
  data = [
    {
      address: 'Address 02',
      id: 1,
      letters: 'ASDA',
      link: 'http://dev.org',
      number: '666',
      order: 1,
      phone: '0150540560560',
      suburb: 'Colonia',
      title: 'Título 01',
      twitter: 'https://twitter.org/',
      youtube: 'https://youtube.org/'
    },
    {
      address: 'Address 02',
      id: 2,
      letters: 'ASDA',
      link: 'http://dev.org',
      number: '666',
      order: 2,
      phone: '0150540560560',
      suburb: 'Colonia',
      title: 'Título 02',
      twitter: 'https://twitter.org/',
      youtube: 'https://youtube.org/'
    },
    {
      address: 'Address 03',
      id: 3,
      letters: 'ASDA',
      link: 'http://dev.org',
      number: '666',
      order: 3,
      phone: '0150540560560',
      suburb: 'Colonia',
      title: 'Título 03',
      twitter: 'https://twitter.org/',
      youtube: 'https://youtube.org/'
    }
  ];

  onClick(item) {
    this.selectedData = item;
  }
}
