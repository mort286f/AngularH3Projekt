import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseLComponent } from './noise-l.component';

describe('NoiseLComponent', () => {
  let component: NoiseLComponent;
  let fixture: ComponentFixture<NoiseLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoiseLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiseLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
