import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaneenOMotaatComponent } from './saneen-o-motaat.component';

describe('SaneenOMotaatComponent', () => {
  let component: SaneenOMotaatComponent;
  let fixture: ComponentFixture<SaneenOMotaatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaneenOMotaatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaneenOMotaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
