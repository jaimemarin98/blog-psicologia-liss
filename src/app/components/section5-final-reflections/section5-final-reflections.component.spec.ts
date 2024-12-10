import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section5FinalReflectionsComponent } from './section5-final-reflections.component';

describe('Section5FinalReflectionsComponent', () => {
  let component: Section5FinalReflectionsComponent;
  let fixture: ComponentFixture<Section5FinalReflectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section5FinalReflectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section5FinalReflectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
