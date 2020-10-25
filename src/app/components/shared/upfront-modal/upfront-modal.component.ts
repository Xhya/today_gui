import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upfront-modal',
  templateUrl: './upfront-modal.component.html',
  styleUrls: ['./upfront-modal.component.scss']
})
export class UpfrontModalComponent implements OnInit {
  @Output() triggerCloseModal = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.triggerCloseModal.emit();
  }

}
