import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerdetailsComponent } from './winnerdetails.component';

describe('WinnerdetailsComponent', () => {
  let component: WinnerdetailsComponent;
  let fixture: ComponentFixture<WinnerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
