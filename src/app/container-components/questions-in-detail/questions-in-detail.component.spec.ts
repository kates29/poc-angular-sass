import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsInDetailComponent } from './questions-in-detail.component';

describe('QuestionsInDetailComponent', () => {
  let component: QuestionsInDetailComponent;
  let fixture: ComponentFixture<QuestionsInDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsInDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
