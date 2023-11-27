import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './app-page-header.component.html',
  styleUrls: ['./app-page-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppPageHeaderComponent {
  @Input() icon?: string;
}
