import { Component, inject, input, signal, Signal, WritableSignal } from '@angular/core';

import { Marquee } from '../../marquee/marquee';
import { FavoriteStuff } from '../../../models/favorite-stuff';

@Component({
  selector: 'app-stuff-search-sidebar',
  imports: [Marquee],
  templateUrl: './stuff-search-sidebar.html',
  styleUrl: './stuff-search-sidebar.css'
})
export class StuffSearchSidebar {

  private readonly marquee = inject(Marquee)

  stuffArray = input.required<FavoriteStuff[] | undefined>()

  kindOfItem = input.required<string | undefined>()


	selectItem(index: number, marqueeComponent: Marquee): void {
		marqueeComponent.setAllCurrentItemData(index);
	}
}
