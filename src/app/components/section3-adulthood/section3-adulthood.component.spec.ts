import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3AdulthoodComponent } from './section3-adulthood.component';

describe('Section3AdulthoodComponent', () => {
  let component: Section3AdulthoodComponent;
  let fixture: ComponentFixture<Section3AdulthoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section3AdulthoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section3AdulthoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
