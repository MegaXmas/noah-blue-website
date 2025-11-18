import { Component } from '@angular/core';

import { StuffSearchSidebar } from '../stuff-i-like/stuff-search-sidebar/stuff-search-sidebar';

@Component({
  selector: 'app-sidebar-right',
  imports: [StuffSearchSidebar],
  templateUrl: './sidebar-right.html',
  styleUrl: './sidebar-right.css'
})
export class SidebarRight {}
