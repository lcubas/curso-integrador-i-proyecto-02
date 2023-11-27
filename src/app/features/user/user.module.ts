import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { AppPageContentComponent } from '@app/shared/components/layout/app-page-content/app-page-content.component';
import { AppPageHeaderComponent } from '@app/shared/components/layout/app-page-header/app-page-header.component';
import { UserFiltersComponent } from './components/user-filters/user-filters.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';

@NgModule({
  declarations: [
    CreateUserFormComponent,
    CreateUserPageComponent,
    EditUserPageComponent,
    UserFiltersComponent,
    UsersPageComponent,
    UsersTableComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    AppPageContentComponent,
    AppPageHeaderComponent,
    UserRoutingModule,
  ],
})
export class UserModule {}
