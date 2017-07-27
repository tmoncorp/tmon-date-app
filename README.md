# Angular 2 Date/Time Picker from TMON
Angular date time picker - Angular reusable UI component. This package supports Angular 4.

## Updates

## Description

Date/time picker dialogs developed by Angular2 based on bootstrap 3.3.7 framework.

## Usage

1. Add bootstap dependency
    ```html
	<!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	```
2. Add jQuery dependency
    ```html
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    ```
3. 	Import TmonTimePickerComponent for TimePicker
```js
import { TmonTimePickerComponent } from 'ng2-tmon-date-time-picker/ng2-tmon-date-time-picker'; 

@NgModule({
  declarations: [
    AppComponent,
      ....
	  TmonTimePickerComponent,
      ...  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 ``` 

4. Import TmonTimePickerComponent for DatePicker
```js
 import { TmonDatePickerComponent } from 'ng2-tmon-date-time-picker/ng2-tmon-date-time-picker';

 @NgModule({
  declarations: [
    ...
    TmonDatePickerComponent,
    ...
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 ```

5. Declare the variables and callbacks in form's component file.
 ```js
  pickerTime: string;
  pickerTime: string;

  constructor(private el: ElementRef) { 
      let currentDate : Date;
      currentDate = new Date();
      this.pickerTime = "00:00:00";
      this.pickerTime = "2017-07-14";
  }

  onDateSelected(pickerDate: string) {
    this.pickerDate = pickerDate;
  }

  onTimeSelected(pickerTime: string) {
	  this.pickerTime = pickerTime;
  }
 ```

6. Add the following lines to your form html code.
```html
<div class="container">
	<tmon-time-picker [pickerTime]="pickerTime" (onTimeSelected)="onTimeSelected($event)"></tmon-time-picker>
	<tmon-date-picker [pickerDate]="pickerDate" (onDateSelected)="onDateSelected($event)"></tmon-date-picker>
</div>
```
  
## Screenshots

### Main UI
![Screenshot](https://github.com/tmoncorp/tmon-date-app/blob/master/main_ui.png?raw=true)
### Time picker dialog
![Screenshot](https://github.com/tmoncorp/tmon-date-app/blob/master/time_picker.png?raw=true)
### Date picker dialog
![Screenshot](https://github.com/tmoncorp/tmon-date-app/blob/master/date_picker.png?raw=true)

## Source & Download
Full source can be found at : https://github.com/tmoncorp/tmon-date-app

Download the library from: https://www.npmjs.com/package/ng2-tmon-date-time-picker

## Developer
Bakhatnur Baityeli

## License

The MIT License

Copyright (c) © 2017 TMON Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
