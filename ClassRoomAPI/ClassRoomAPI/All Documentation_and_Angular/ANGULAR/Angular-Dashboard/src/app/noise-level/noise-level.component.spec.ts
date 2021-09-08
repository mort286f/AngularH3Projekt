import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseLevelComponent } from './noise-level.component';

describe('NoiseLevelComponent', () => {
  let component: NoiseLevelComponent;
  let fixture: ComponentFixture<NoiseLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoiseLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiseLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
