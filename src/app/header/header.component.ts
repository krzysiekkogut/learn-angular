import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() navigationChanged = new EventEmitter<string>();

  onRecipesNavItemClick() {
    this.navigationChanged.emit('recipes');
  }

  onShoppingListNavItemClick() {
    this.navigationChanged.emit('shoppingList');
  }
}
