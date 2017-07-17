import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  pickerDate: string;
  pickerTime: string;

  constructor() { 
      let currentDate : Date;
      currentDate = new Date();
      this.pickerTime = "00:00:00";
      this.pickerDate = "2017-07-14";
  }

	onDateSelected(pickerDate: string) {
    this.pickerDate = pickerDate;
	}

  onTimeSelected(pickerTime: string) {
		this.pickerTime = pickerTime;
	}

  print() {
    console.log(this.pickerDate + " " + this.pickerTime);
  }
}
