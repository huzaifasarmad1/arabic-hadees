import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjmaOTwarekhComponent } from './tarjma-o-twarekh.component';

describe('TarjmaOTwarekhComponent', () => {
  let component: TarjmaOTwarekhComponent;
  let fixture: ComponentFixture<TarjmaOTwarekhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjmaOTwarekhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjmaOTwarekhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
