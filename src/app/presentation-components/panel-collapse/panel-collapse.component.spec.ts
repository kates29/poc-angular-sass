import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCollapseComponent } from './panel-collapse.component';

describe('PanelCollapseComponent', () => {
  let component: PanelCollapseComponent;
  let fixture: ComponentFixture<PanelCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
