import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreviewTabsComponent } from './scoreview-tabs.component';

describe('ScoreviewTabsComponent', () => {
  let component: ScoreviewTabsComponent;
  let fixture: ComponentFixture<ScoreviewTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreviewTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreviewTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
