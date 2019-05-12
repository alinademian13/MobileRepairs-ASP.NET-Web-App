import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker.html'
})
export class NgbdDatepickerComponent {
  model: Date;
  @Output() voted = new EventEmitter<Date>();

  select(model: Date) {
    // model = new Date(model)
    this.voted.emit(model);
  }
}
