import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThoroughbredComponent } from './list-thoroughbred.component';

describe('ListThoroughbredComponent', () => {
  let component: ListThoroughbredComponent;
  let fixture: ComponentFixture<ListThoroughbredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThoroughbredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThoroughbredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
