import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BechFinderComponent } from './bech-finder.component';

describe('BechFinderComponent', () => {
  let component: BechFinderComponent;
  let fixture: ComponentFixture<BechFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BechFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BechFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
