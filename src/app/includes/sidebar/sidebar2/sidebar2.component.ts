import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements  OnInit, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() message = '';
  constructor() {
    console.log('Sidebar2Component:Constructor');
  }

  ngOnChanges() {    	  console.log('Sidebar2Component:OnChanges');  }
  ngOnInit() {    		  console.log('Sidebar2Component:OnInit');  }
  ngDoCheck() {    		  console.log('Sidebar2Component:DoCheck');  }
  ngAfterContentInit() {  console.log('Sidebar2Component:AfterContentInit');  }
  ngAfterContentChecked() { console.log('Sidebar2Component:AfterContentChecked'); }
  ngAfterViewInit() {     console.log('Sidebar2Component:AfterViewInit');  }
  ngAfterViewChecked() {  console.log('Sidebar2Component:AfterViewChecked');  }
  ngOnDestroy() {    	  console.log('Sidebar2Component:OnDestroy');  }

}
