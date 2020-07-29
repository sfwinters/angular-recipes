import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";



@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[ ] = [
    {
      name: "Burger",
      description: "This is definitely an American food. Which means it's pretty good.",
      image: "https://media1.s-nbcnews.com/j/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.fit-760w.jpg",
    },
    {
      name: "Hot Dogs",
      description: "Hot dogs are nice and they are very convenient to eat.",
      image: "https://potatorolls.com/wp-content/uploads/Basic-Hot-Dogs.jpg",
    },
    {
      name: "Fettuccine Alfredo with Chicken",
      description: "One time Angel tried to cook this dish from scratch and he ended up overdoing it with the cheese because he didn't realize the specific cheese he was using wasn't supposed to melt.",
      image: "https://jessicagavin.com/wp-content/uploads/2019/08/chicken-alfredo-8-1200.jpg",
    }
  ];

  trialRecipe: Recipe = {
    name: "Tacos",
    description: "They are very nice to eat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/440px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"
  };
 
  constructor() { }

  ngOnInit(): void{
  }

}
