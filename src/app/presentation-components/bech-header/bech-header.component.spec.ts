import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BechHeaderComponent } from './bech-header.component';

describe('BechHeaderComponent', () => {
  let component: BechHeaderComponent;
  let fixture: ComponentFixture<BechHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BechHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BechHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
