import { Recipe } from "../recipes/recipe"
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeData{
    constructor(private http : HttpClient){

    }
    loadRecipies(): Recipe[]{
        /* return []; */
        return [
        new Recipe('Hazelnut Cake', 'Yummy delicious cake', 'https://cdn.momsdish.com/wp-content/uploads/2018/09/IMG_5564-scaled.jpg', 500, 800, new Date("10/10/2019"), new Date("10/11/2019")), 
        new Recipe('Red Velvet Cake', 'Yummy delicious cake', 'https://www.cookingclassy.com/wp-content/uploads/2014/11/red-velvet-cake-5.jpg', 200, 300, new Date("10/10/2019"), new Date("10/11/2019")), 
        new Recipe('Layer Cake', 'Yummy delicious cake', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN', 300, 700, new Date("10/10/2019"), new Date("10/11/2019")) ];
    }

    addRecipeToDb(recipeData:any){
        console.log("Recipe added to Db", recipeData);
        this.http.post('https://myangularpro-b188a.firebaseio.com/recipe.json', recipeData)
        .subscribe(responseData => {
            console.log(responseData);
        });
    }

    getRecipes() : Observable<any[]>{
        const url = 'https://myangularpro-b188a.firebaseio.com/recipe.json';
        return this.http.get<any[]>(url);
    }
}
