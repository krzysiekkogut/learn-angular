import { DataStorageService } from '../shared/data-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(r => console.log(r));
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }
}
