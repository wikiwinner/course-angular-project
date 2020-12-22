import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutteachers',
  templateUrl: './aboutteachers.component.html',
  styleUrls: ['./aboutteachers.component.css']
})
export class AboutteachersComponent implements OnInit {
  public OurTeachers = 'Our Teachers';
  public elit = 'I was born in Shymkent, on the Kazakhstan. I have been familiar with this course for a long time.' +
    'I showed good results in 2 months. I advise you to study';
  public CraigDaniel = 'Craig Daniel';
  public MathTeacher = 'Math Teacher';
  public  image = 'assets/images/person_1.jpg';
  public  image1 = 'assets/images/person_2.jpg';
  public  image2 = 'assets/images/person_3.jpg';
  public  image3 = 'assets/images/person_4.jpg';
  public  image4 = 'assets/images/person_5.jpg';
  public  image5 = 'assets/images/person_6.JPG';
  public TaylorSimpson = 'Taylor Simpson';
  public JonasTabble = 'Jonas Tabble';
  public CratRack = 'Crat Rack';
  public elit1 = 'I was born in New York, on the USA. I have been familiar with this course for a long time.' +
    ' I showed good results in 2 months. I advise you to study';
  public DanielBill = 'Daniel Bill';
  public elit2 = 'I was born in Bagdat, on the Irak. I have been familiar with this course for a long time.' +
    ' I showed good results in 2 months. I advise you to study';
  public LailaSeidull = 'Laila Seidull';
  public elit3 = 'I was born in Pekin, on the China. I have been familiar with this course for a long time.' +
    ' I showed good results in 2 months. I advise you to study';
  public  elit4 = 'I was born in Tokyo city, on the Japanese. I have been familiar with this course for a long time.' +
    ' I showed good results in 2 months. I advise you to study';
  public elit5 = 'I was born in Uralsk, on the Kazakhstan. I have been familiar with this course for a long time.' +
    ' I showed good results in 2 months. I advise you to study';
  public EraAli = 'Era Ali';
  public Engenering = 'Engenering';
  public Developer = 'Developer';
  public Science = 'Science';
  public Junior = 'Junior';
  public Director = 'Director';

  constructor() { }

  ngOnInit(): void {
  }

}
