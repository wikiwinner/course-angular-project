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
  selector: 'app-sidebar3',
  templateUrl: './sidebar3.component.html',
  styleUrls: ['./sidebar3.component.css']
})
export class Sidebar3Component implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy   {

  @Input() message = '';
  constructor() {
    console.log('Sidebar3Component:Constructor');
  }

  ngOnChanges() {    	  console.log('Sidebar3Component:OnChanges');  }
  ngOnInit() {    		  console.log('Sidebar3Component:OnInit');  }
  ngDoCheck() {    		  console.log('Sidebar3Component:DoCheck');  }
  ngAfterContentInit() {  console.log('Sidebar3Component:AfterContentInit');  }
  ngAfterContentChecked() { console.log('Sidebar3Component:AfterContentChecked'); }
  ngAfterViewInit() {     console.log('Sidebar3Component:AfterViewInit');  }
  ngAfterViewChecked() {  console.log('Sidebar3Component:AfterViewChecked');  }
  ngOnDestroy() {    	  console.log('Sidebar3Component:OnDestroy');  }
}
