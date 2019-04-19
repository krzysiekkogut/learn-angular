import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CoreModule } from '../core/core.module';
import { Recipe } from '../recipes/models';
import { RecipesService } from './../recipes/recipes.service';
import { DataStorageService } from './data-storage.service';

describe('Service: Data Storage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CoreModule]
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

    it('should call set recipes in recipes service with returned data', () => {
      // Arrange
      const recipe1 = new Recipe(
        'test name 1',
        'description',
        'http://url.com/1.jpg',
        []
      );
      const recipe2 = new Recipe(
        'test name 2',
        'description',
        'http://url.com/2.jpg',
        []
      );
      const dataStorageService: DataStorageService = TestBed.get(
        DataStorageService
      );
      const httpClient: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClient, 'get').and.returnValue(of([recipe1, recipe2]));
      const recipesService: RecipesService = TestBed.get(RecipesService);
      spyOn(recipesService, 'setRecipes').and.callThrough();

      // Act
      dataStorageService.fetchRecipes();

      // Assert
      expect(recipesService.setRecipes).toHaveBeenCalledWith(
        jasmine.arrayContaining([recipe1, recipe2])
      );
    });
  });
});
