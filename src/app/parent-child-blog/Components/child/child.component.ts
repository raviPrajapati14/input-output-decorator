import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildData } from '../../SAMPLE_DATA';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() dataFromParent!: ChildData[];
  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  passDataToParent(item: ChildData) {
    this.onClick.emit(item);
  }
}
