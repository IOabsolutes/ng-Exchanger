import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'exhanger';
  usdRate = 0;
  eurRate = 0;

  ngOnInit() {
    const getCurrencies = async () => {
      const response = await fetch(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
      );
      const data = await response.json();
      const result = data;
      this.usdRate = result[24].rate.toFixed(2);
      this.eurRate = result[31].rate.toFixed(2);
    };
    getCurrencies();
  }
  constructor() {
    this.usdRate = 0;
    this.eurRate = 0;
  }
}
