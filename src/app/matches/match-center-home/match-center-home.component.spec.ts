import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCenterHomeComponent } from './match-center-home.component';

describe('MatchCenterHomeComponent', () => {
  let component: MatchCenterHomeComponent;
  let fixture: ComponentFixture<MatchCenterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCenterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCenterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
