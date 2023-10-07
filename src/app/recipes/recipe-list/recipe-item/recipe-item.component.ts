import { Component, OnInit, Input, EventEmitter,Output  } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number; // pass in the index of this item from outside the recipe-list component

  // <void> means type is no information
  // @Output() recipeSelected = new EventEmitter<void>();
  // constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  // onSelected(){
  //   this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);

  // }

}
