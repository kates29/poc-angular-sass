import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BechFooterComponent } from './bech-footer.component';

describe('BechFooterComponent', () => {
  let component: BechFooterComponent;
  let fixture: ComponentFixture<BechFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BechFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BechFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
