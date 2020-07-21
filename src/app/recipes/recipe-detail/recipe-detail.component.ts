import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Recipe } from "../recipe";
import { RecipeData } from 'src/app/shared/recipe.service';

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  recipeData:RecipeData;
  recipiesFromServer:any[] = [];
  recipiesFromServerConvertedToArray:any[] = [];

  constructor(private rd : RecipeData) {
    this.recipeData = rd;
  }

  ngOnInit() {
    //this.loadRecipies();
  }

  addRecipe(nf:NgForm){
    console.log('Recipe is added', nf.value);
    this.recipeData.addRecipeToDb(nf.value);
  }

  loadRecipies(){
    this.rd.getRecipes().subscribe(response=>{
      console.log("From Server",response);
      this.recipiesFromServer = response;
      Object.keys(response).forEach(key => this.recipiesFromServerConvertedToArray.push(response[key]));
    })
}
}
