import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section4AcademicJournalComponent } from './section4-academic-journal.component';

describe('Section4AcademicJournalComponent', () => {
  let component: Section4AcademicJournalComponent;
  let fixture: ComponentFixture<Section4AcademicJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section4AcademicJournalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section4AcademicJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
