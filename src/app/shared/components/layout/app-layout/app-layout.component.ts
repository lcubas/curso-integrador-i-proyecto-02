import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { RouterModule } from '@angular/router';
import { Menu, SidenavMenuComponent } from '../sidenav-menu/sidenav-menu.component';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    AppHeaderComponent,
    SidenavMenuComponent,
  ],
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
  opened = true;

  menu: Menu = [
    {
      icon: 'home',
      link: '/dashboard',
      title: 'Dashboard',
    },
    {
      icon: 'group',
      link: '/usuarios',
      title: 'Usuarios',
    },
  ];

  toggle(): void {
    this.opened = !this.opened;
  }
}
