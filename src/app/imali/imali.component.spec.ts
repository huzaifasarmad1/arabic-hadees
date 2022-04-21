import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaliComponent } from './imali.component';

describe('ImaliComponent', () => {
  let component: ImaliComponent;
  let fixture: ComponentFixture<ImaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
