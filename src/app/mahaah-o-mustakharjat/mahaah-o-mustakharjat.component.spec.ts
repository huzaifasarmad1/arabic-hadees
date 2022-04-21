import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahaahOMustakharjatComponent } from './mahaah-o-mustakharjat.component';

describe('MahaahOMustakharjatComponent', () => {
  let component: MahaahOMustakharjatComponent;
  let fixture: ComponentFixture<MahaahOMustakharjatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahaahOMustakharjatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahaahOMustakharjatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
