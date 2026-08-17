import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ContentStore } from './services/content.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly store = inject(ContentStore);
  private readonly router = inject(Router);
  readonly menuOpen = signal(false);
  readonly searchOpen = signal(false);
  searchQuery = '';

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.menuOpen.set(false);
      this.searchOpen.set(false);
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  openSearch(): void {
    this.searchOpen.set(true);
    this.menuOpen.set(false);
  }

  closeSearch(): void {
    this.searchOpen.set(false);
  }

  submitSearch(): void {
    const query = this.searchQuery.trim();
    void this.router.navigate(['/search'], { queryParams: query ? { q: query } : {} });
  }
}
