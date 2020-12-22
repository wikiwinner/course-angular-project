import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})

export class AdmissionsComponent implements OnInit {
  public Admissions = 'Admissions';
  public AdmissionsAbout = 'If you do not understand something, contact the administrator.';
  public Admission = 'Admissions';
  public Home = 'Home';
  public image = 'assets/images/course_6.jpg';
  public  Requirements = 'Online Olympiad';
  public olim = 'The online Olympiad is held twice a year. You can participate in all courses.';
  public Transferees = 'Transferees';
  public first = 'Transfer means you go to the next level. To do this, you must complete a full course.';
  public second = 'Transfer means you go to the next level. To do this, you must complete a full course.';
  constructor() { }

  ngOnInit(): void {
  }

}
