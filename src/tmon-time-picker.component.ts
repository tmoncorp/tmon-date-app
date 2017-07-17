import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tmon-time-picker',
  templateUrl: './tmon-time-picker.component.html'
})

export class TmonTimePickerComponent{
	hour: string;
  	minute: string;
  	second: string;
	@Input('pickerTime') pickerTime: string;
  	@Output() onTimeSelected = new EventEmitter<string>();
	
	constructor() { 
		this.hour = '00';
		this.minute = '00';
		this.second = '00';

		this.setPickerTime();
	}
	
	private formatTime(time: number) :string {
		if (time < 10) 
			return "0" + time;
		return "" + time;	
	}

	setPickerTime(){
		this.pickerTime = this.hour + ":" + 
					this.minute + ":" + 
					this.second;
		this.onTimeSelected.emit(this.pickerTime);
	}
	
	getCurrentTime() {
		let currentDate : Date;
		currentDate = new Date();
		this.hour = this.formatTime(currentDate.getHours());
		this.minute = this.formatTime(currentDate.getMinutes());
		this.second = this.formatTime(currentDate.getSeconds());
		
		this.setPickerTime();
	}
	
	checkValidity() {
		let h : number;
		h = Number(this.hour);
		this.adjustHour(h);
		
		let m : number;	
		m = Number(this.minute) 
		this.adjustMinute(m);
		
		let s : number;
		s = Number(this.second);
		
		this.adjustSecond(s);
	}
	
	changeHour(increase : number) {
		let h : number;
		h = Number(this.hour) + increase;
		this.adjustHour(h);
	}
	
	private adjustHour(h: number) {
		if (h > 24) {
			h = h%24 - 24;
		}
		
		if (h < 0) {
			h = h %24 + 24;
		}
		
		if (h == 24) {
			h = 0;
		}
		
		this.hour = this.formatTime(h);
	}
	
	changeMinute(increase : number) {
		let m : number;
		m = Number(this.minute) + increase;
		
		this.adjustMinute(m);
	}
	
	private adjustMinute(m: number) {
		if (m >= 60) {
			m = m - 60;
		}
		
		if (m < 0) {
			m = m + 60;
		}
		
		this.minute = this.formatTime(m);
	}
	
	
	changeSecond(increase : number) {
		let s : number;
		s = Number(this.second) + increase;
		
		this.adjustSecond(s);
	}
	
	private adjustSecond(s: number) {
		if (s >= 60) {
			s = s - 60;
		}
		
		if (s < 0) {
			s = s + 60;
		}
		
		this.second = this.formatTime(s);
	}
}
