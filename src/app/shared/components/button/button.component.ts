import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

type ButtonType = 'submit' | 'button';

type ButtonSize = 'small' | 'default' | 'large';

type ButtonColor = 'basic' | 'primary' | 'accent' | 'warn';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() color: ButtonColor = 'primary';
  @Input() classes: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: ButtonType = 'button';
  @Input() size: ButtonSize = 'default';
  @Input() tooltipMessage: string = '';
}
