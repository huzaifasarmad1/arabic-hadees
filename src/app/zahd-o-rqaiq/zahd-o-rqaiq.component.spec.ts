import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahdORqaiqComponent } from './zahd-o-rqaiq.component';

describe('ZahdORqaiqComponent', () => {
  let component: ZahdORqaiqComponent;
  let fixture: ComponentFixture<ZahdORqaiqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahdORqaiqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahdORqaiqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
