import { Injectable, signal, WritableSignal } from '@angular/core';
import { FavoriteStuff } from '../models/favorite-stuff';

@Injectable({
  providedIn: 'root'
})
export class ArrayDataService {
  
  public stuffArrayData: WritableSignal<FavoriteStuff[]> = signal([]);

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
  }

  getArrayItemIndex(): number {
    return this.selectedArrayItemIndex();
  }

}
