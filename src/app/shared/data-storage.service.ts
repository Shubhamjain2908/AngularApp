import {Injectable} from "@angular/core";
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../recipes/recipe-list/recipe.model";
import {Http, Response} from "@angular/http";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://angularapp-http.firebaseio.com/recipes.json', this.recipeService.getRecipe());
  }

  getRecipes() {
    this.http.get('https://angularapp-http.firebaseio.com/recipes.json')
    .map(
      (response: any) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        //return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipe(recipes);
      }
    );
  }
}
