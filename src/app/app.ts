import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { Header } from './components/header/header';
import { SidebarLeft } from './components/sidebar-left';


@Component({
  selector: 'app-root',
  imports: [
            RouterOutlet, 
            Header, SidebarLeft
          ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('noah-blue-website-frontend');
}
