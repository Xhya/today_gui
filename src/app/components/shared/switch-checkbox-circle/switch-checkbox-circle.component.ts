import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch-checkbox-circle',
  templateUrl: './switch-checkbox-circle.component.html',
  styleUrls: ['./switch-checkbox-circle.component.scss']
})
export class SwitchCheckboxCircleComponent implements OnInit {
  @Output() triggerOnClickToggleCheckbox = new EventEmitter<any>();

  @Input() isChecked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickToggleCheckbox() {
    this.triggerOnClickToggleCheckbox.emit();
  }

}
