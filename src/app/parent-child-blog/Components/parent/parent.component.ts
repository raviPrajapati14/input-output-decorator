import { Component, Input, OnInit } from '@angular/core';
import { ChildData, ParentData, SAMPLE_DATA } from '../../SAMPLE_DATA';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  passDataFromParent!: ChildData[];
  dataFromChild: ChildData | undefined;
  sampleData = SAMPLE_DATA.parentData;

  constructor() {}

  ngOnInit(): void {}

  getDataFromChild(item: ChildData) {
    this.dataFromChild = item;
  }

  passDataToChild(item: ChildData[]) {
    this.dataFromChild = undefined;
    this.passDataFromParent = item;
  }
}
