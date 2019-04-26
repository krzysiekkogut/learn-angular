import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from './../core/core.module';
import { DataStorageService } from './data-storage.service';

describe('Service: Data Storage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CoreModule],
      providers: [provideMockStore()]
    });
  });

  describe('fetchRecipes', () => {
    it('should call HTTP service /recipes.json endpoint', () => {
      // Arrange
      const service: DataStorageService = TestBed.get(DataStorageService);
      const httpClient: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClient, 'get').and.returnValue(of([]));

      // Act
      service.fetchRecipes();

      // Assert
      expect(httpClient.get).toHaveBeenCalledWith(
        jasmine.stringMatching(/recipes\.json$/)
      );
    });
  });
});
