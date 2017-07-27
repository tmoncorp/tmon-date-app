import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Month } from './month';

@Component({
  selector: 'tmon-date-picker',
  templateUrl: './tmon-date-picker.component.html'
})

export class TmonDatePickerComponent{
    years: number[] = [];
    months: Month[] = [];
    monthsWith30: number[] = [4, 6, 9, 11];
    monthNames : string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    days: number[][];
    baseYear: number = 2007;
    yearsToBuild: number = 30;

    year: number;
    month: number;
    day: number;
    dayOfWeekStart : number;
    validDate: boolean = true;
    @Input('pickerDate') pickerDate: string;
    @Output() onDateSelected = new EventEmitter<string>();

    constructor() { 
        let currentDate : Date;
		currentDate = new Date();
        this.year = currentDate.getFullYear();
        this.month = currentDate.getMonth() + 1;
        this.day = currentDate.getDate();

        this.updatePickerDate();
        this.buildDate();
    }

    pickThisDate(day: number) {
        this.day = day;
        this.updatePickerDate();
    }

    onYearChange(event: Event) {
        this.year = Number((event.target as HTMLSelectElement).value);
        this.buildDate();
    }

    onMonthChange(event: Event) {
        this.month = Number((event.target as HTMLSelectElement).value);
        this.buildDate();
    }

    onPickerYearChange() {
        let validDate = true;
        let d = this.pickerDate.split("-");
        if (d.length != 3) {
            validDate = false;
            return;
        }

        for (let i = 0; i<d.length; i++) {
            if (isNaN(Number(d[i]))) {
                validDate = false;
                return;
            }
        }

        
        if (validDate) {
            this.validDate = validDate;
            let year = Number(d[0]);
            let month = Number(d[1]);
            let day = Number(d[2]);
            let date : Date = new Date(year, month - 1, day);
            
            this.year = date.getFullYear();
            this.month = date.getMonth();
            this.day = date.getDate();

            this.updatePickerDate();
        }
    }

    nextMonth() {
        this.month++;
        if (this.month > 12) {
            if (this.year == this.baseYear + this.yearsToBuild ) { // no more shift
                this.month --;
            } else {
                this.year ++;
                this.month = 1;
            }
        }
        this.buildDate();
    }

    prevMonth() {
        this.month--;
        if (this.month < 1) {
            if (this.year == this.baseYear) { // no more shift
                this.month ++;
            } else {
                this.year --;
                this.month = 12;
            }
        }
        this.buildDate();
    }

    private updatePickerDate() {
        this.pickerDate = this.year + "-";
        this.pickerDate = this.pickerDate + (this.month < 10 ? "0" + this.month : this.month) + "-";
        this.pickerDate = this.pickerDate + (this.day < 10 ? "0" + this.day : this.day);
        this.onDateSelected.emit(this.pickerDate);
    }

    private buildDate() {
        let d: Date;
        d = new Date(this.year, this.month - 1, 1);

        this.dayOfWeekStart = d.getDay();
        for (var i=0; i<= this.yearsToBuild; i++) {
            this.years[i] = i + this.baseYear;
        }

        for (var i=0; i<12; i++) {
            this.months[i] = new Month(i + 1, this.monthNames[i]);
        }

        this.buildCalendar(this.year, this.month);
    }

    private buildCalendar(year: number, month: number) {
        let ends = 31;
        if (month == 2) {
            if (year % 4 == 0) {
                ends = 29;
            } else {
                ends = 28;
            }
        } else if (this.monthsWith30.indexOf(month) > -1) {
            ends = 30;
        }

        let dayStart = this.dayOfWeekStart;
        let j: number = 1;
        let row : number = 0;
        this.days = [];
        while(j <= ends) {
            this.days[row] = [];
            for (let i = 0; i< 7; i++) {
                if (i == this.dayOfWeekStart || j > 1 && j <= ends) {
                    this.days[row][i] = j;
                    j ++;
                } else {
                    this.days[row][i] = 0;
                }

                if (j > ends) break;                
            }
            row ++;
        }
    }
}