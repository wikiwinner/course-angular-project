import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutacademyComponent } from './aboutacademy.component';

describe('AboutacademyComponent', () => {
  let component: AboutacademyComponent;
  let fixture: ComponentFixture<AboutacademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutacademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutacademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
