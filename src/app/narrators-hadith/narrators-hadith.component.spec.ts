import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarratorsHadithComponent } from './narrators-hadith.component';

describe('NarratorsHadithComponent', () => {
  let component: NarratorsHadithComponent;
  let fixture: ComponentFixture<NarratorsHadithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarratorsHadithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarratorsHadithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
