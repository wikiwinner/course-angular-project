import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutteachersComponent } from './aboutteachers.component';

describe('AboutteachersComponent', () => {
  let component: AboutteachersComponent;
  let fixture: ComponentFixture<AboutteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutteachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
