import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSingleComponent } from './course-single.component';

describe('CourseSingleComponent', () => {
  let component: CourseSingleComponent;
  let fixture: ComponentFixture<CourseSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
