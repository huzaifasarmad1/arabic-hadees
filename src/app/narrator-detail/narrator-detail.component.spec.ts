import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarratorDetailComponent } from './narrator-detail.component';

describe('NarratorDetailComponent', () => {
  let component: NarratorDetailComponent;
  let fixture: ComponentFixture<NarratorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarratorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarratorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
