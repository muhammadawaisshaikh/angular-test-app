import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrls: ['./dom-manipulation.component.scss']
})
export class DomManipulationComponent implements OnInit, AfterViewInit {

  message: any;

  @ViewChild('child1', {static: false}) firstChild: ElementRef;
  @ViewChild('child2', {static: false}) secondChild: ElementRef;
  @ViewChild('errors', {static: false}) errorChild: ElementRef;

  constructor() { }

  ngOnInit() {
    this.message = 'Awais Text Change.';
  }

  ngAfterViewInit() {
    // firstChild
    console.log("before change > ", this.firstChild.nativeElement.innerText);
    this.firstChild.nativeElement.innerText = this.message;
    console.log("after change > ", this.firstChild.nativeElement.innerText);

    // secondChild
    this.secondChild.nativeElement.style.background = 'red';
    this.secondChild.nativeElement.style.color = 'white';

    // error
    let splitted = this.errorChild.nativeElement.innerText.split(" ");
    console.log("splitted >", splitted);

    // constructing new DOM after splitting
    this.errorChild.nativeElement.innerHTML = `
      <div class="errors-head">
        <span class="number">${splitted[0]}</span>
        <span class="typo">${splitted[1]}</span>
      </div>
    `;
  }

}
