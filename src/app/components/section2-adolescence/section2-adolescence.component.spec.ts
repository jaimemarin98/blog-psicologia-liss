import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2AdolescenceComponent } from './section2-adolescence.component';

describe('Section2AdolescenceComponent', () => {
  let component: Section2AdolescenceComponent;
  let fixture: ComponentFixture<Section2AdolescenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section2AdolescenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section2AdolescenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
