import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private dataStorageService: DataStorageService) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSaveData() {
    this.subscription.add(
      this.dataStorageService.storeRecipes().subscribe(r => console.log(r))
    );
  }

  onFetchData() {
    this.subscription.add(this.dataStorageService.fetchRecipes());
  }
}
