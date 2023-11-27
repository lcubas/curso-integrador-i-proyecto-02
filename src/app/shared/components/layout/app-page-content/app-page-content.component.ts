import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-page-content',
  template: `
    <div class="app-page-content">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .app-page-content {
      padding: 3rem 1.5rem 2.5rem 1.5rem;
    }
  `]
})
export class AppPageContentComponent {

}
