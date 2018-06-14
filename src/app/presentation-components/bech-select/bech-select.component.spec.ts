import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BechSelectComponent } from './bech-select.component';

describe('BechSelectComponent', () => {
  let component: BechSelectComponent;
  let fixture: ComponentFixture<BechSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BechSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BechSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
