import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkhlaqComponent } from './ikhlaq.component';

describe('IkhlaqComponent', () => {
  let component: IkhlaqComponent;
  let fixture: ComponentFixture<IkhlaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkhlaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkhlaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
