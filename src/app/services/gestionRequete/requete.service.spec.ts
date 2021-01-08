import { TestBed, inject } from '@angular/core/testing';

import { RequeteService } from './requete.service';

describe('RequeteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequeteService]
    });
  });

  it('should be created', inject([RequeteService], (service: RequeteService) => {
    expect(service).toBeTruthy();
  }));
});
