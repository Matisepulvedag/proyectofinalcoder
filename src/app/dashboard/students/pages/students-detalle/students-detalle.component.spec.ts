import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetalleComponent } from './students-detalle.component';

describe('StudentsDetalleComponent', () => {
  let component: StudentsDetalleComponent;
  let fixture: ComponentFixture<StudentsDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
