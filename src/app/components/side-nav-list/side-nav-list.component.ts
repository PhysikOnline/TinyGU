import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss'],
})
export class SideNavListComponent implements OnInit {
  @Output() sideNavClose = new EventEmitter();

  navItems = [
    { name: 'About', route: '/about' },
    { name: 'Account', route: '/account' },
    { name: 'Help', route: '/help' },
  ];

  constructor() {}

  ngOnInit() {}

  onSideNavClose() {
    this.sideNavClose.emit();
  }
}
