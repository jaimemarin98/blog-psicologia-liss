import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1AnalysisComponent } from './section1-analysis.component';

describe('Section1AnalysisComponent', () => {
  let component: Section1AnalysisComponent;
  let fixture: ComponentFixture<Section1AnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section1AnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section1AnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
