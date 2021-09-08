import { TestBed } from '@angular/core/testing';

import { NoisesService } from './noises.service';

describe('NoisesService', () => {
  let service: NoisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
