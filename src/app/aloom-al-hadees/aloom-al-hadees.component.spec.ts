import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloomAlHadeesComponent } from './aloom-al-hadees.component';

describe('AloomAlHadeesComponent', () => {
  let component: AloomAlHadeesComponent;
  let fixture: ComponentFixture<AloomAlHadeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AloomAlHadeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AloomAlHadeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
