import { TestBed } from '@angular/core/testing';
import { ProductsApiService } from './products-api.service';


describe('ProductsApiServiceTsService', () => {
  let service: ProductsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
