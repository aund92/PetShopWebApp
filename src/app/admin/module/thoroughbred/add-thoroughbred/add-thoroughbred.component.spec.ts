import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThoroughbredComponent } from './add-thoroughbred.component';

describe('AddThoroughbredComponent', () => {
  let component: AddThoroughbredComponent;
  let fixture: ComponentFixture<AddThoroughbredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThoroughbredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThoroughbredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
