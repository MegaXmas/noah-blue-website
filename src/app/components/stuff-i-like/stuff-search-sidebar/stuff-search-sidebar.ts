import { Component, inject, signal, WritableSignal, OnInit, OnDestroy, effect, computed, untracked } from '@angular/core';

import { ArrayDataService } from '../../../services/array-data-service';

import { FavoriteStuff } from '../../../models/favorite-stuff';
    import { FavoriteMovie } from '../../../models/favorite-movie';
    import { FavoriteSong } from '../../../models/favorite-song';
    import { FavoriteGame } from '../../../models/favorite-game';
    import { FavoriteShow } from '../../../models/favorite-show';
    import { FavoriteAnime } from '../../../models/favorite-anime';



@Component({
    selector: 'app-stuff-search-sidebar',
    imports: [],
    templateUrl: './stuff-search-sidebar.html',
    styleUrl: './stuff-search-sidebar.css'
})

export class StuffSearchSidebar implements OnDestroy, OnInit {

    // ======IMPORTANT MISC PROPERTIES======
    // ======                         ======
            private readonly arrayDataService = inject(ArrayDataService);

            gradientCache = new Map<string, string>();
    // ======                         ======



    // ======ON INIT/DESTROY======
    // ======               ======
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
    // ======               ======



    // ======ARRAY DATA METHODS AND PROPERTIES======
    // ======                                 ======
            stuffArray: WritableSignal<FavoriteStuff[]> = signal([]);
    
            itemType: WritableSignal<string> = signal('');
    
            searchText: WritableSignal<string> = signal('');
    
    
            requestArrayData(): void {
                this.stuffArray.set(this.arrayDataService.getArrayData());
            }
    
            //  ==========* LISTENER FOR DETERMINING WHICH FAVORITEITEMS ARRAY TO USE==========
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
    
    
    
            //  ==========* LISTENER EFFECT FOR ARRAY DATA SERVICE==========
                    private readonly arrayDataListener = effect(() => {
                        const dataFromService = this.arrayDataService.stuffArrayData();
                        if (dataFromService.length > 0) {
                            this.stuffArray.set(dataFromService);
                            console.log(`SIDEBAR SEARCH COMPONENT: received ${dataFromService.length} items`);
                            
                            this.loadAllGradients();
                        }
                        
                        if (this.stuffArray().length === 0 ) {
                            console.log("SIDEBAR SEARCH COMPONENT: array data failed to populate");
                        } else {
                            console.log("SIDEBAR SEARCH COMPONENT: items in array = " + this.stuffArray().length);
                        };
                    });
    
    
    
            //  ==========* TYPESAFE METHODS==========
                    isSong(item: FavoriteStuff): item is FavoriteSong {
                        return item?.type === 'song';
                    }
                    
                    isMovie(item: FavoriteStuff): item is FavoriteMovie {
                        return item?.type === 'movie';
                    }
                    
                    isGame(item: FavoriteStuff): item is FavoriteGame {
                        return item?.type === 'game';
                    }
                    
                    isShow(item: FavoriteStuff): item is FavoriteShow {
                        return item?.type === 'show';
                    }
                    
                    isAnime(item: FavoriteStuff): item is FavoriteAnime {
                        return item?.type === 'anime';
                    }
    
    
    
            //  ==========* SEARCH AND SELECTION METHODS ==========    
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
                            if (this.isShow(item)) {
                                return item.showTitle.toLowerCase().includes(search);
                            }
                            if (this.isAnime(item)) {
                                return item.animeTitle.toLowerCase().includes(search);
                            }
                            return false;
                        });
                    });
    
    
                    onSearchInput(event: Event): void {
                        const input = event.target as HTMLInputElement;
                        this.searchText.set(input.value);
                        console.log(`search input ${this.searchText()}`)
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
    
    
    
            //  ==========* PLACEHOLDER TEXT METHOD TO ADJUST FOR SCREEN SIZE==========
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
    // ======                                 ======



    // ======GRADIENT STYLE METHODS======
    // ======                      ======
                    getItemImageUrl(item: FavoriteStuff): string {
                        if (this.isSong(item)) {
                            return item.songAlbumCover;
                        }
                        if (this.isMovie(item)) {
                            return item.moviePoster;
                        }
                        if (this.isGame(item)) {
                            return item.gamePoster;
                        }
                        if (this.isShow(item)) {
                            return item.showPoster;
                        }
                        if (this.isAnime(item)) {
                            return item.animePoster;
                        }
                        return '';
                    }
    
    
                    getColorAt(ctx: CanvasRenderingContext2D, x: number, y: number): string {
                        const pixel = ctx.getImageData(x, y, 1, 1).data;
                        return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`
                    }
    
    
                    getBackgroundGradient(item: FavoriteStuff): string {
                        const imageUrl = this.getItemImageUrl(item);
                        console.log(`gradient image source: ${imageUrl}`)
                        
                        return this.gradientCache.get(imageUrl)
                        || 'linerar-gradient(to right, #ccc, #eee)';
                    }
    
    
                    extractColorsFromImage(imageUrl: string): Promise<string> {
                        return new Promise((resolve) => {
                            const img = new Image();
                            img.crossOrigin = 'Anonymous';
                            
                            img.onload = () => {
                                const canvas = document.createElement('canvas');
                                const ctx = canvas.getContext('2d')!;
                                
                                canvas.width = img.width;
                                canvas.height = img.height;
                                
                                ctx.drawImage(img, 0, 0)
                                
                                const colors = [
                                    this.getColorAt(ctx, img.width * 0.25, img.height / 2),
                                    this.getColorAt(ctx, img.width * 0.5, img.height / 2),
                                    this.getColorAt(ctx, img.width * 0.75, img.height / 2) 
                                ]
                                
                                resolve(`linear-gradient(to right, ${colors.join(', ')})`)
                            };
                            
                            img.onerror = () => {
                                console.warn('Failed to load image:', imageUrl);
                                resolve('linear-gradient(to right, #ccc, #eee)');
                            };
                            
                            img.src = imageUrl;
                        })
                    }


                    extractColorsFromLoadedImage(img: HTMLImageElement): string {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d')!;
                        
                        canvas.width = img.width;
                        canvas.height = img.height;
                        
                        try {
                            ctx.drawImage(img, 0, 0);
                            
                            const colors = [
                                this.getColorAt(ctx, img.width * 0.25, img.height / 2),
                                this.getColorAt(ctx, img.width * 0.5, img.height / 2),
                                this.getColorAt(ctx, img.width * 0.75, img.height / 2)
                            ];
                            
                            return `linear-gradient(to right, ${colors.join(', ')})`;
                            
                        } catch (error) {
                            console.warn('CORS error with existing image:', error);
                            return 'linear-gradient(to right, #ccc, #eee)';
                        }
                    }
    
    
                    async loadAllGradients() {
                        console.log('Starting to load gradients...');
                        
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        
                        for (const item of this.filteredItems()) {
                            const imageUrl = this.getItemImageUrl(item);
                            
                            
                            if (imageUrl && !this.gradientCache.has(imageUrl)) {
                                const existingImg = document.querySelector(`img[src="${imageUrl}"]`) as HTMLImageElement;
                                
                                if (existingImg && existingImg.complete) {
                                    const gradient = this.extractColorsFromLoadedImage(existingImg);
                                    this.gradientCache.set(imageUrl, gradient);
                                    console.log('Gradient created from existing image:', gradient)
                                
                                } else {
                                const gradient = await this.extractColorsFromImage(imageUrl);
                                this.gradientCache.set(imageUrl, gradient);
                                console.log('Gradient created:', gradient);
                                }
                            }
                        }
                        
                        console.log('Cache after loading:', this.gradientCache);
                    }
    // ======                      ======
}