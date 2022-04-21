import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TafseerEQuranComponent } from './tafseer-e-quran.component';

describe('TafseerEQuranComponent', () => {
  let component: TafseerEQuranComponent;
  let fixture: ComponentFixture<TafseerEQuranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TafseerEQuranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TafseerEQuranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
