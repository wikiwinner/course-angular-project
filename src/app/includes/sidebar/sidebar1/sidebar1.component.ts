import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input, OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-sidebar1',
  templateUrl: './sidebar1.component.html',
  styleUrls: ['./sidebar1.component.css']
})
export class Sidebar1Component implements OnInit, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() message = '';
  constructor() {
    console.log('Sidebar1Component:Constructor');
  }

  ngOnChanges() {    	  console.log('Sidebar1Component:OnChanges');  }
  ngOnInit() {    		  console.log('Sidebar1Component:OnInit');  }
  ngDoCheck() {    		  console.log('Sidebar1Component:DoCheck');  }
  ngAfterContentInit() {  console.log('Sidebar1Component:AfterContentInit');  }
  ngAfterContentChecked() { console.log('Sidebar1Component:AfterContentChecked'); }
  ngAfterViewInit() {     console.log('Sidebar1Component:AfterViewInit');  }
  ngAfterViewChecked() {  console.log('Sidebar1Component:AfterViewChecked');  }
  ngOnDestroy() {    	  console.log('Sidebar1Component:OnDestroy');  }

}
