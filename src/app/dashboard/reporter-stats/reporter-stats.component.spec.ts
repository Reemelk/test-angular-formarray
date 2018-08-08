import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterStatsComponent } from './reporter-stats.component';

describe('ReporterStatsComponent', () => {
  let component: ReporterStatsComponent;
  let fixture: ComponentFixture<ReporterStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
