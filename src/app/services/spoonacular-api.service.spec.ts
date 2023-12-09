import { TestBed } from '@angular/core/testing';

import { SpoonacularApiService } from './spoonacular-api.service';

describe('SpoonacularApiService', () => {
  let service: SpoonacularApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpoonacularApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
