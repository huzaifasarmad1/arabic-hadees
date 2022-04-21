import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloomQuranComponent } from './aloom-quran.component';

describe('AloomQuranComponent', () => {
  let component: AloomQuranComponent;
  let fixture: ComponentFixture<AloomQuranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AloomQuranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AloomQuranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
