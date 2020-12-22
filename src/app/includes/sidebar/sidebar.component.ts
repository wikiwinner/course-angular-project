import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  displayChild = false;
  displayChild1 = false;
  displayChild2 = false;

  constructor() {  console.log('SidebarComponent:Constructor'); }
  // tslint:disable-next-line:typedef
  toggle(){  this.displayChild = !this.displayChild;  }
  toggle1(){  this.displayChild1 = !this.displayChild1;  }
  toggle2(){  this.displayChild2 = !this.displayChild2;  }

  ngOnChanges() {    		console.log('SidebarComponent:OnChanges');  }
  ngOnInit() {    			console.log('SidebarComponent:OnInit');  }
  ngDoCheck() {         	console.log('SidebarComponent:DoCheck');  }
  ngAfterContentInit() {    console.log('SidebarComponent:AfterContentInit');  }
  ngAfterContentChecked() { console.log('SidebarComponent:AfterContentChecked'); }
  ngAfterViewInit() {       console.log('SidebarComponent:AfterViewInit');  }
  ngAfterViewChecked() {    console.log('SidebarComponent:AfterViewChecked');  }
  // tslint:disable-next-line:typedef

  ngOnDestroy() {    		console.log('SidebarComponent:OnDestroy');  }
  public  Learmore = 'Learn more';
  public KeyofSuccess = 'Key of Success';
  public AcademicsPrinciple = 'Academics Principle';
  public OurPhilosophy = 'Our Philosophy';
}
