import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeerahOShumailComponent } from './seerah-o-shumail.component';

describe('SeerahOShumailComponent', () => {
  let component: SeerahOShumailComponent;
  let fixture: ComponentFixture<SeerahOShumailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeerahOShumailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeerahOShumailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
