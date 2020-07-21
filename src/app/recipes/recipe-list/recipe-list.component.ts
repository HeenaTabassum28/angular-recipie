import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeData } from 'src/app/shared/recipe.service';

@Component({
   selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe = new Recipe('Hazelnut Cake', 'Yummy delicious cake', 'https://cdn.momsdish.com/wp-content/uploads/2018/09/IMG_5564-scaled.jpg');

  constructor(private rd : RecipeData) {
    this.recipes = rd.loadRecipies();
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
