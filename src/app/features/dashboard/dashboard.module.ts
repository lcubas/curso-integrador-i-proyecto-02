import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppPageHeaderComponent } from '@app/shared/components/layout/app-page-header/app-page-header.component';
import { AppPageContentComponent } from '@app/shared/components/layout/app-page-content/app-page-content.component';
import { AppLayoutComponent } from '@app/shared/components/layout/app-layout/app-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AppPageHeaderComponent,
    AppPageContentComponent,
    AppLayoutComponent,
    DashboardRoutingModule,
  ]
})
export class DashboardModule {}
