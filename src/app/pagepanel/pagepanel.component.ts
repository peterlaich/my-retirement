import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagepanel',
  templateUrl: './pagepanel.component.html',
  styleUrls: ['./pagepanel.component.css']
})
export class PagepanelComponent implements OnInit {

  public tkeys;

  title = 'Manage';
  sample_profile = {
    'id': 1,
    'Creation date': new Date('2019-01-18'),
    'Investment amount': 50000,
    'Account number': '001077019304',
    'Accumulated investment amount': 50000,
    'Charge date': 1,
    'Current market value': 50011,
    'Status': 'Monthly charge',
    'Currency': 'TWD'
  };

  constructor() { 
    this.tkeys = Object.keys(this.sample_profile)
  }

  ngOnInit() {
  }

}
