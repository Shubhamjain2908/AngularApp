import { Injectable } from '@angular/core';
import {  Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Shubham jain');
    return this.httpClient.put('https://angularapp-http.firebaseio.com/recipes.json',
                               this.recipeService.getRecipes(),
                              { observe: 'body' // events
                                       , params: new HttpParams().set('auth', token)
                                  // , headers: headers
                                 });
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://angularapp-http.firebaseio.com/recipes.json?auth=' + token, {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
