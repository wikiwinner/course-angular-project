import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  viewMode = 'course';
 public  ww = 'assets/images/course_1.jpg';
  public aaa = 'A database is an organized collection of structured information, or' +
    ' data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are ' +
    'referred to as a database system, often shortened to just database.';

  public ss = 'assets/images/course_2.jpg';
  public sss = 'assets/images/course_3.jpg';
  public ssss = 'assets/images/course_4.jpg';
  public text = 'C++ was designed with a bias toward system programming and embedded, ' +
    'resource-constrained software and large systems, with performance, efficiency, and' +
    ' flexibility of use as its design highlights.[10] C++ has also been found useful' +
    ' in many other contexts, with key strengths being software infrastructure and ' +
    'resource-constrained applications,[10] including desktop applications, video ' +
    'games, servers , and performance-critical' +
    ' applications (e.g. telephone switches or space probes).';

  public enginering = 'Engineering is the use of scientific principles to design ' +
    'and build machines, structures, and other items, including bridges, tunnels, ' +
    'roads, vehicles, and buildings.[1] The discipline of engineering encompasses a' +
    ' broad range of more specialized fields of engineering, each with a more specific' +
    ' emphasis on particular areas of applied mathematics, applied science, and types of' +
    ' application. ' +
    'See glossary of engineering.';
  public qwerty = ' Java is a class-based, object-oriented programming ' +
    'language that is designed to have as few implementation dependencies as possible. ' +
    'It is a general-purpose programming language intended to let application developers' +
    ' write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all' +
    ' platforms that support Java without the need for recompilation.[18] Java applications ' +
    'are typically compiled to bytecode that can run on any Java virtual machine (JVM) ' +
    'regardless of the underlying computer architecture. ';



  public Courses = 'Courses';
  public Lorem = 'You can see all the courses here';


  constructor() { }

  ngOnInit(): void {
  }

}
