import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public ss = 'Our online course includes more than 500 video courses. You can take courses in' +
   ' engineering, programming, scientific innovation.' +
    '          The online course was created on December 18, 2020. Founder Serikbay Duman. ' +
   'The site, which is mainly for online courses, contains more than 500 video courses,' +
    '            tests and assignments. Everyone can study for a fee.' +
    '            The number of registered people is shown in the statistics.' +
   ' More than 1 million people are registered at the Academy in one year.' +
    '            This is a great achievement. I advise you to join.';
  public Read = 'Read more';
  public Testimonials = 'Testimonials';
  public image = 'assets/images/person_1.jpg';
  public image1 = 'assets/images/person_2.jpg';
  public image2 = 'assets/images/person_3.jpg';
  public image3 = 'assets/images/person_4.jpg';
  public image4 = 'assets/images/person_5.jpg';
  public image5 = 'assets/images/person_6.JPG';

  public Engenering = 'Engenering';
  public Developer = 'Developer';
  public Science = 'Science';
  public Junior = 'Junior';
  public Director = 'Director';
  public Senior = 'Senior';

  public DanielBill = 'Daniel Bill';
  public CratRack = 'Crat Rack';
  public TaylorSimpson = 'Taylor Simpson';
  public JonasTabble = 'Jonas Tabble';
  public LailaSeidull = 'Laila Seidull';
  public Era = 'Erasyl Alibek';

  public elit3 = 'I was born in Pekin, on the China. I have been familiar with this course for a long time.' +
    ' I showed good results in 2 months. I advise you to study';
  public  elit4 = 'I was born in Tokyo city, on the Japanese. I have been familiar with this course for a long time.' +
    ' I showed good results in 2 months. I advise you to study';
  public elit5 = 'I was born in Uralsk, on the Kazakhstan. I have been familiar with this course for a long time.' +
    ' I showed good results in 2 months. I advise you to study';
  public elit2 = 'I was born in Bagdat, on the Irak. I have been familiar with this course for a long time.' +
    ' I showed good results in 2 months. I advise you to study';
  public elit1 = 'I was born in New York, on the USA. I have been familiar with this course for a long time.' +
    ' I showed good results in 2 months. I advise you to study';
  public elit = 'I was born in Shymkent, on the Kazakhstan. I have been familiar with this course for a long time.' +
    'I showed good results in 2 months. I advise you to study';

  public News = 'Read All News';
  public update = 'News and Updates';
  public photo = 'assets/images/blog_large_1.jpg';
  public photo2 = 'assets/images/blog_1.jpg';
  public photo3 =  'assets/images/blog_2.jpg';
  public moon = 'June 6, 2019';
  public Why = 'Why Academics Works';
  public PersonalizeLearning = 'Personalize Learning';
  public work = 'I invite you to get a job as a teacher at the Academy. Everything is easy here, you just need to follow a few rules. I think you are familiar with the process. ' +
    'You do your job by recording videos and checking online assignments.';
  public TrustedCourses = 'Trusted Courses';
  public pp = 'The number of registered people is shown in the statistics. More than 1 million people are registered at the Academy in one year.' +
    ' This is a great achievement. The online course will help you become a school teacher.';
  public ToolsforStudents = 'Tools for Students';
  public ter = 'If you need an individual course, you can contact us directly through the administrator. There are special deaths for those who take the course individually.' +
    'It can be said that the main feature of the course. ';
  public PopularCourses = 'Popular Courses';
  public dolor = 'The best courses of the week.';






  constructor() { }

  ngOnInit(): void {
  }

}
