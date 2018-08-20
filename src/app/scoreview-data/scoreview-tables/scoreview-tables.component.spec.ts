import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreviewTablesComponent } from './scoreview-tables.component';

describe('ScoreviewTablesComponent', () => {
  let component: ScoreviewTablesComponent;
  let fixture: ComponentFixture<ScoreviewTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreviewTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreviewTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
