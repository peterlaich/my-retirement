import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagemain',
  templateUrl: './pagemain.component.html',
  styleUrls: ['./pagemain.component.css']
})
export class PagemainComponent implements OnInit {
  title = 'My Retirement';
  constructor() { }

  ngOnInit() {
  }

}
