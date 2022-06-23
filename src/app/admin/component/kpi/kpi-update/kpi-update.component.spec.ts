import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiUpdateComponent } from './kpi-update.component';

describe('KpiUpdateComponent', () => {
  let component: KpiUpdateComponent;
  let fixture: ComponentFixture<KpiUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
