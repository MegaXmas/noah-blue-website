import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';

import { Header } from './components/header/header';
import { SidebarLeft } from './components/sidebar-left/sidebar-left';
import { SidebarRight } from "./components/sidebar-right/sidebar-right";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header, SidebarLeft, SidebarRight
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('noah-blue-website-frontend');
}
