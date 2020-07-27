import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes = [];

  trialRecipe: Recipe = {
    name: "tacos",
    description: "they are very nice to eat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/440px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"
  };


  name: string = "Angel"; // name is adhering to the rules of datatype string
  lastName: string = "Juarez"
  age: number = 21; // age is adhering to the rules of datatype number

  constructor() { }

  ngOnInit(): void {
  }

}
