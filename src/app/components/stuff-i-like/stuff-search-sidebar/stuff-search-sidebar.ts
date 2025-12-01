import { Component, inject, signal, WritableSignal, OnInit, OnDestroy, effect, computed, untracked } from '@angular/core';
import { ArrayDataService } from '../../../services/array-data-service';

import { FavoriteStuff } from '../../../models/favorite-stuff';
import { FavoriteMovie } from '../../../models/favorite-movie';
import { FavoriteSong } from '../../../models/favorite-song';
import { FavoriteGame } from '../../../models/favorite-game';


@Component({
  selector: 'app-stuff-search-sidebar',
  imports: [],
  templateUrl: './stuff-search-sidebar.html',
  styleUrl: './stuff-search-sidebar.css'
})
export class StuffSearchSidebar implements OnDestroy, OnInit {

  private readonly arrayDataService = inject(ArrayDataService);


  // ======ON INIT / ON DESTROY======

  ngOnInit(): void {
    console.log("SIDEBAR SEARCH COMPONENT: initializing component")

    console.log(`item type is ${this.itemType()}`)
  }

  ngOnDestroy(): void {
    console.log(`SIDEBAR SEARCH COMPONENT: destroying component`)

      this.stuffArray.set([]);

      if (this.stuffArray().length === 0 ) {
        console.log("SIDEBAR SEARCH COMPONENT: array data cleansed");
      } else {
        console.log("items in array = " + this.stuffArray().length + 
                    `\narray data cleanse failed`);
      };


  }


  // ======ARRAY DATA METHODS======

  stuffArray: WritableSignal<FavoriteStuff[]> = signal([]);

  itemType: WritableSignal<string> = signal('');



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
  
  isGame(item: FavoriteStuff): item is FavoriteGame {

    return item?.type === 'game';
  }

  selectItem(item: FavoriteStuff) {
    const originalIndex = this.stuffArray().indexOf(item);
    this.arrayDataService.setArrayItemIndex(originalIndex);

    console.log(`SIDEBAR SEARCH COMPONENT: item "` + Object.values(item!)[0] + `" with index ` + originalIndex + ` selected` )
    this.arrayDataService.setArrayItemIndex(originalIndex);

    if (this.arrayDataService.selectedArrayItemIndex() === originalIndex) {
      console.log("SIDEBAR SEARCH COMPONENT: index " + originalIndex + " sent to array-data-service")
    } else {
      console.log(`SIDEBAR SEARCH COMPONENT: index failed to be sent to array-data-service 
                  selected index: ` + originalIndex + `
                  index currently stored in array-data-service: ` + this.arrayDataService.selectedArrayItemIndex())
    }
  }

  placeholderText = computed(() => {
    const type = this.itemType();
    const length = this.stuffArray().length;
    const isSmallScreen = window.innerWidth < 768;

    console.log(`Computing placeholder:`, type, length, `vp small?:`, isSmallScreen);

    if (isSmallScreen) {
      return `search ${type}s ♥️`
    }
    
    return `search ${length} of my fav ${type}s ♥️`;
  });

  searchText: WritableSignal<string> = signal('');

  private readonly itemTypeListener = effect(() => {
    const typeFromService = this.arrayDataService.itemType();
    console.log('1. Type from service:', typeFromService);
    console.log('2. Current array length:', this.stuffArray().length);
    console.log('3. Current itemType:', this.itemType());
    
    this.itemType.set(typeFromService);
    
    // ✅ Clear the search input when page changes
    untracked(() => {
      this.searchText.set('');
    });
    
    console.log('4. Updated itemType:', this.itemType());
    console.log('5. Placeholder:', this.placeholderText());
  });


  filteredItems = computed(() => {
    const search = this.searchText().toLowerCase();
    const items = this.stuffArray()

    if (!search) return items;
    
    return items.filter(item => {
      if (this.isSong(item)) {
        return item.songTitle.toLowerCase().includes(search) || 
              item.songArtist.toLowerCase().includes(search);
      }
      if (this.isMovie(item)) {
        return item.movieTitle.toLowerCase().includes(search);
      }
      if (this.isGame(item)) {
        return item.gameTitle.toLowerCase().includes(search);
      }
      return false;
    });
  });

    onSearchInput(event: Event): void {
      const input = event.target as HTMLInputElement;
      this.searchText.set(input.value);
      console.log(`search input ${this.searchText()}`)
    }

}