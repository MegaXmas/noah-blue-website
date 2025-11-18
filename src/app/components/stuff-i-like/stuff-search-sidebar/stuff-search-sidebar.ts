import { Component, inject, signal, WritableSignal, OnInit, OnDestroy, effect } from '@angular/core';
import { ArrayDataService } from '../../../services/array-data-service';

import { FavoriteStuff } from '../../../models/favorite-stuff';
import { FavoriteMovie } from '../../../models/favorite-movie';
import { FavoriteSong } from '../../../models/favorite-song';

// TODO: display all items in array
// TODO: make the list navigate the marquee to the proper item when selected

@Component({
  selector: 'app-stuff-search-sidebar',
  imports: [],
  templateUrl: './stuff-search-sidebar.html',
  styleUrl: './stuff-search-sidebar.css'
})
export class StuffSearchSidebar implements OnDestroy, OnInit {

  private readonly arrayDataService= inject(ArrayDataService);

  stuffArray: WritableSignal<FavoriteStuff[]> = signal([]);


  // ======ON INIT / ON DESTROY======

  ngOnInit(): void {
    console.log("SIDEBAR SEARCH COMPONENT: initializing component")
  }

  ngOnDestroy(): void {
    console.log(`SIDEBAR SEARCH COMPONENT: destroying component`)

      // this.stuffArray.set([]);

      // if (this.stuffArray().length === 0 ) {
      //   console.log("SIDEBAR SEARCH COMPONENT: array data cleansed");
      // } else {
      //   console.log("items in array = " + this.stuffArray().length + 
      //               `\narray data cleanse failed`);
      // };
  }



  // ======ARRAY DATA METHODS======

  private readonly arrayDataListener = effect(() => {
    const dataFromService = this.arrayDataService.stuffArrayData();
    if (dataFromService.length > 0) {
      this.stuffArray.set(dataFromService);
      console.log(`SIDEBAR SEARCH COMPONENT: received ${dataFromService.length} items`);
    }

    if (this.stuffArray().length === 0 ) {
        console.log("SIDEBAR SEARCH COMPONENT: array data failed to populate");
      } else {
        console.log("SIDEBAR SEARCH COMPONENT: items in array = " + this.stuffArray().length);
      };
  });

  requestArrayData(): void {
    this.stuffArray.set(this.arrayDataService.getArrayData());
  }


  isSong(item: FavoriteStuff): item is FavoriteSong {
    return item?.type === 'song';
  }
  
  isMovie(item: FavoriteStuff): item is FavoriteMovie {
    return item?.type === 'movie';
  }


  selectItem(index: number) {
    console.log("SIDEBAR SEARCH COMPONENT: item with index " + index + " selected" )
    this.arrayDataService.setArrayItemIndex(index);

    if (this.arrayDataService.selectedArrayItemIndex() === index) {
      console.log("SIDEBAR SEARCH COMPONENT: index " + index + " sent to array-data-service")
    } else {
      console.log(`SIDEBAR SEARCH COMPONENT: index failed to be sent to array-data-service 
                  selected index: ` + index + `
                  index currently stored in array-data-service: ` + this.arrayDataService.selectedArrayItemIndex())
    }
  }

}