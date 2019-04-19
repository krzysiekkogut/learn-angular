import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input } from '@angular/core';

import { Recipe } from '../../models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  animations: [
    trigger('hover', [
      state(
        'in',
        style({
          transform: 'translateX(-32px)'
        })
      ),
      state(
        'out',
        style({
          transform: 'translateX(0)'
        })
      ),
      transition('in <=> out', [
        animate(70, style({ backgroundColor: 'lightyellow' })),
        animate(300)
      ])
    ]),
    trigger('visible', [
      state(
        'in',
        style({
          opacity: 1
        })
      ),
      transition(
        'void => *',
        animate(
          1500,
          keyframes([
            style({ opacity: 0, transform: 'translateX(-500px)', offset: 0 }),
            style({
              transform: 'translateX(-250px)',
              opacity: 0.5,
              offset: 0.3
            }),
            style({ transform: 'translateX(-50px)', opacity: 1, offset: 0.8 }),
            style({ transform: 'translateX(0)', offset: 1 })
          ])
        )
      )
    ])
  ]
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  hoverState = 'out';

  onMouseOver() {
    this.hoverState = 'in';
  }

  onMouseLeave() {
    this.hoverState = 'out';
  }
}
