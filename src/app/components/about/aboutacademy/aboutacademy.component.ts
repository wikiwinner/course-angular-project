import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutacademy',
  templateUrl: './aboutacademy.component.html',
  styleUrls: ['./aboutacademy.component.css']
})
export class AboutacademyComponent implements OnInit {
  public AboutUs = 'About Us';
  public About = 'Read about us briefly';
  public Home = 'Home';
  public AcademicsHistory = 'Academics History';
  public history = 'The online course was created on December 18, 2020. Founder Serikbay Duman. ' +
    'The site, which is mainly for online courses, contains more than ' +
    '500 video courses, tests and assignments. Everyone can study for a fee.';
  public desc = 'The number of registered people is shown in the statistics. ' +
    'More than 1 million people are registered at the Academy in one year.' +
    ' This is a great achievement. I advise you to join.';
  public Works = 'Why Academics Works';
  public image = 'assets/images/blog_1.jpg';
  public images = 'assets/images/blog_2.jpg';
  public PersonalizedLearning = 'Personalized Learning';
  public delect = 'I invite you to get a job as a teacher at the Academy. ' +
    'Everything is easy here, you just need to follow a few rules. I think you are ' +
    'familiar with the process. ' +
    'You do your job by recording videos and checking online assignments.';
  public Modi = 'The online course will help you become a school teacher. ' +
    'Standardized certificates are issued here.';
  public Lorem = 'If you need an individual course, you can contact us directly through ' +
    'the administrator. There are special deaths for those who take the course individually.';
  public facere = 'It can be said that the main feature of the course. On this platform, an order for a ' +
    'private training department is accepted at any time.';

  constructor() { }

  ngOnInit(): void {
  }

}
