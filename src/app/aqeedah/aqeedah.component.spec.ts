import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqeedahComponent } from './aqeedah.component';

describe('AqeedahComponent', () => {
  let component: AqeedahComponent;
  let fixture: ComponentFixture<AqeedahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AqeedahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AqeedahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
