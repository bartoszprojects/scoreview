import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreviewTopComponent } from './scoreview-top.component';

describe('ScoreviewTopComponent', () => {
  let component: ScoreviewTopComponent;
  let fixture: ComponentFixture<ScoreviewTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreviewTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreviewTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
