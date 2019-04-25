import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Recipe } from './../../models';
import { RecipeItemComponent } from './recipe-item.component';

describe('Component: Recipe Item', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeItemComponent],
      imports: [RouterTestingModule, NoopAnimationsModule]
    });
  });

  it('should create component', () => {
    // Arrange
    // Act
    const fixture = TestBed.createComponent(RecipeItemComponent);
    const component = fixture.debugElement
      .componentInstance as RecipeItemComponent;

    // Assert
    expect(component).toBeTruthy();
  });

  it('should display link with name, description and image', () => {
    // Arrange
    const fixture = TestBed.createComponent(RecipeItemComponent);
    const component = fixture.debugElement
      .componentInstance as RecipeItemComponent;
    const element = fixture.debugElement.nativeElement as HTMLElement;

    // Act
    const recipeName = 'Hummus';
    const recipeDescription = 'Use for sandwiches';
    const imagePath = 'https://img.com/hummus.jpg';
    component.recipe = new Recipe(recipeName, recipeDescription, imagePath, []);
    fixture.detectChanges();

    // Assert
    expect(element.querySelector('a h4').textContent).toEqual(recipeName);
    expect(element.querySelector('a h4+p').textContent).toEqual(
      recipeDescription
    );
    expect((element.querySelector('a img') as HTMLImageElement).src).toEqual(
      imagePath
    );
  });
});
