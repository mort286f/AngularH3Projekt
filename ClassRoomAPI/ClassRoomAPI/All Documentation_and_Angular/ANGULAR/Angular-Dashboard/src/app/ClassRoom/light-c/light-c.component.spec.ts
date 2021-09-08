import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCComponent } from './light-c.component';

describe('LightCComponent', () => {
  let component: LightCComponent;
  let fixture: ComponentFixture<LightCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
