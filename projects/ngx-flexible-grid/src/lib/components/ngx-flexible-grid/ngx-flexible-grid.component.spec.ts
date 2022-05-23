import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlexibleGridComponent } from './ngx-flexible-grid.component';

describe('NgxFlexibleGridComponent', () => {
  let component: NgxFlexibleGridComponent;
  let fixture: ComponentFixture<NgxFlexibleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFlexibleGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlexibleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
