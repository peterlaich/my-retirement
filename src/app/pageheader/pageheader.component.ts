import { Component, OnInit } from '@angular/core';
import { faUser, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'; // the user icon and globe icon
import { library } from '@fortawesome/fontawesome-svg-core'; // icon library 

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.css']
})
export class PageheaderComponent implements OnInit {

  constructor() { 
    library.add(faUser);
    library.add(faGlobeAmericas);
  }

  ngOnInit() {
  }

}
