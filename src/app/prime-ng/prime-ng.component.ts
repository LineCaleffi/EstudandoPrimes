import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNgComponent {
  title: string = '';

  checked: boolean = false;
  checked2: boolean = true;

  value: number = 0;
  value2: number = 55;
  value3: number = 25;
  value4: number = 99;

  slider: number = 0;
  slider2: number = 50;

  rangeValues: number[] = [20,80];

  upperCase(){
    this.title = this.title.toUpperCase();
  }
}
