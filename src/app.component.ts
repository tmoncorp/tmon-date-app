import { Component, Input, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  date: string;
  time: string;

  constructor(private el: ElementRef) { 
      let currentDate : Date;
      currentDate = new Date();
      this.time = "00:00:00";
      this.date = "2017-07-14";
  }

	onDateSelected(pickerDate: string) {
    this.date = pickerDate;
	}

  onTimeSelected(pickerTime: string) {
		this.time = pickerTime;
	}

  checkState() {
    console.log(this.date + " " + this.time);
  }
}
