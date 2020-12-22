import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar3Component } from './sidebar3.component';

describe('Sidebar3Component', () => {
  let component: Sidebar3Component;
  let fixture: ComponentFixture<Sidebar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sidebar3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sidebar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
