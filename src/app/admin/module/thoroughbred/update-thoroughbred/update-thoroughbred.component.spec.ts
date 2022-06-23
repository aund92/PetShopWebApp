import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateThoroughbredComponent } from './update-thoroughbred.component';

describe('UpdateThoroughbredComponent', () => {
  let component: UpdateThoroughbredComponent;
  let fixture: ComponentFixture<UpdateThoroughbredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateThoroughbredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateThoroughbredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
