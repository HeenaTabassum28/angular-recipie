import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
   selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styles: [`
    .glyphicon-heart {
        color: #ccc;
        cursor: pointer;
    }
    
    .highlighted {
        color: deeppink;
    }   
`]
  
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;

  constructor() {
    debugger;
    
  }

  ngOnInit() {
    debugger;
  }
//   ngOnChanges(){
// this.totalLikes = this.recipe.defaultLikes;
//   }

  //@Input()
  
  
  totalLikes = 0;
     iLike = false;     
    
    onClick(likes:Number){
      console.log(likes);
        this.iLike = !this.iLike;
        this.recipe.defaultLikes += this.iLike ? 1 : -1;
        
    }

}
