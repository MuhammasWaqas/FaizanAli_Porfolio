import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResumeComponent } from './my-resume.component';

describe('MyResumeComponent', () => {
  let component: MyResumeComponent;
  let fixture: ComponentFixture<MyResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
