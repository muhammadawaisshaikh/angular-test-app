import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output() toggle = new EventEmitter<any>();
  visible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.visible = !this.visible;
    this.toggle.emit(this.visible);
    console.log("from side-menu", this.visible);
  }

}
