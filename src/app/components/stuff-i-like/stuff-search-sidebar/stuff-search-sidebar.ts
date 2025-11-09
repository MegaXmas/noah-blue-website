import { Component, signal, Signal, WritableSignal } from '@angular/core';

import { Marquee } from '../../marquee/marquee';
import { FavoriteStuff } from '../../../models/favorite-stuff';

@Component({
  selector: 'app-stuff-search-sidebar',
  imports: [Marquee],
  templateUrl: './stuff-search-sidebar.html',
  styleUrl: './stuff-search-sidebar.css'
})
export class StuffSearchSidebar {

  stuffArray: WritableSignal<FavoriteStuff[]> = signal([])

  findItemType(marqueeComponent: Marquee): Signal<string> {
    return marqueeComponent.kindOfItem
  }

	selectItem(index: number, marqueeComponent: Marquee): void {
		marqueeComponent.setAllCurrentItemData(index);
	}
}
