import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'Exchange',
  templateUrl: './Exchange.componet.html',
  styleUrls: ['./Exchange.componet.css'],
})
export class ExchangeComponent implements OnInit {
  @Input() usdRate: number;
  @Input() eurRate: number;
  @Input() uahRate: number;
  value1: number;
  value2: number;
  currency1: string;
  currency2: string;
  exchangeRates: { [key: string]: number } = {
    UAH: 1,
    USD: 0,
    EUR: 0,
  };

  ngOnInit(): void {
    this.updateExchangeRates();
  }
  ngOnChanges(changes: SimpleChanges): void {
    const { usdRate, eurRate } = changes;
    if (usdRate || eurRate) {
      this.updateExchangeRates();
    }
  }
  updateExchangeRates(): void {
    if (this.usdRate) {
      this.exchangeRates.USD = this.usdRate;
    }

    if (this.eurRate) {
      this.exchangeRates.EUR = this.eurRate;
    }
    this.convertCurrency1to2();
    this.convertCurrency2to1();
  }
  convertCurrency1to2(): void {
    const rate: any =
      this.exchangeRates[this.currency1] / this.exchangeRates[this.currency2];
    const result = this.value1 * rate;
    this.value2 = parseFloat(result.toFixed(2));
  }

  convertCurrency2to1(): void {
    const rate: any =
      this.exchangeRates[this.currency2] / this.exchangeRates[this.currency1];
    const result = this.value2 * rate;
    this.value1 = parseFloat(result.toFixed(2));
  }
}
