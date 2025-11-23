import { Injectable, signal, WritableSignal } from '@angular/core';
import { FavoriteStuff } from '../models/favorite-stuff';
import { FavoriteSong } from '../models/favorite-song';
import { FavoriteMovie } from '../models/favorite-movie';

@Injectable({
  providedIn: 'root'
})
export class ArrayDataService {
  
  public stuffArrayData: WritableSignal<FavoriteStuff[]> = signal([]);
  public itemType: WritableSignal<string> = signal(``);

  public selectedArrayItemIndex: WritableSignal<number> = signal(0);


  setArrayData(arrayData: FavoriteStuff[]) {
    this.stuffArrayData.set([]);
    this.stuffArrayData.set(arrayData);

    if (this.stuffArrayData() === arrayData) {
      console.log(`ARRAY DATA SERVICE: stuffArrayData recieved and now contains ${this.stuffArrayData().length} items`)
    } else {
      console.log(`ARRAY DATA SERVICE: stuffArrayData failed to populate.`)
    }
  }

  getArrayData(): FavoriteStuff[] {
    return this.stuffArrayData();
  }


  setArrayItemIndex(index: number) {
    this.selectedArrayItemIndex.set(index);

    if (this.selectedArrayItemIndex() === index) {
      console.log(`ARRAY DATA SERVICE: selected item index set successfully at: ${this.selectedArrayItemIndex()}.`)
    } else {
      console.log(`ARRAY DATA SERVICE: selected item failed to set successfully.
                  index recieved: ${index}
                  current stored index: ${this.selectedArrayItemIndex()}`)
    }
  }

  getArrayItemIndex(): number {
    return this.selectedArrayItemIndex();
  }

}
