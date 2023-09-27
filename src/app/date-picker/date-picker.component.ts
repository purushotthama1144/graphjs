import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  projectForm!: FormGroup;

  startDate = "";
  endDate = "";
  minDate = moment().toDate();
  
  availableStartDate = "";
  availableEndDate = "";
  minAvailableDate = moment('2023-09-27').toDate(); // minimum available date
  maxAvailableDate = moment('2023-09-30').toDate(); // maximum available date

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      availableStartDate: new FormControl('', [Validators.required]),
      availableEndDate: new FormControl('', [Validators.required]),
    })

    this.projectForm.patchValue({
      availableStartDate: this.minAvailableDate,
      availableEndDate: this.maxAvailableDate,
    });
    
  }

  submitForm(projectForm:any) {
    this.startDate = moment(projectForm.startDate).format('MM-DD-YYYY') ;
    this.endDate = moment(projectForm.endDate).format('MM-DD-YYYY') ;
  }
}