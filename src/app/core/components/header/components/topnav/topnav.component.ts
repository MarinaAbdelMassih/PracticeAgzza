import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  isCollapsed = true;
  isOpen=false;
  constructor() { }

  ngOnInit(): void {
  }

  togglenav()
 {
  this.isOpen = ! this.isOpen;
 }
}
