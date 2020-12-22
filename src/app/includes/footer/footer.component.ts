import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public HelpCenter = 'Help Center';
  public OurSupporters = 'Our Supporters';
  public ShareYourStory = 'Share YourStory';
  public Press = 'Press';
  public SupportCommunity = 'Support Community';
  public Contact = 'Contact';
  public OurCampus = 'Our Campus';
  public Acedemic = 'Acedemic';
  public OurInterns = 'Our Interns';
  public News = 'News';
  public OurLeadership = 'Our Leadership';
  public Careers = 'Careers';
  public HumanResources = 'Human Resources';
  public  OurCourses = 'Our Courses';
  public ScienceEngineering = 'Science Engineering';
  public Programmer = 'Programmer';
  public ArtsHumanities = 'Arts Humanities';
  public EconomicsFinance = 'Economics and Finance';
  public ComputerScience = 'Computer Science';
  public imageUrl = 'assets/images/logos.png';
  public  about = 'Our online course includes more than 500 video courses. ' +
    'You can take courses in engineering, programming, scientific innovation.';
  public copyrigth = 'Copyright © 2020. Duman Academy, Inc. Privacy  ';

  constructor() { }

  ngOnInit(): void {
  }

}
