import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  // templateUrl: './notfound.component.html'
  template: `<p>
          Page not found
          </p>`
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
