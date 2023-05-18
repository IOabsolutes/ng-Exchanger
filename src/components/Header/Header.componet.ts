import { Component, Input } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './Header.componet.html',
  styleUrls: ['./Header.componet.css'],
})
export class HeaderComponent {
  @Input() usdRate: number;
  @Input() eurRate: number;
}
