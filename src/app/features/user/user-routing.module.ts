import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '@app/shared/components/layout/app-layout/app-layout.component';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: UsersPageComponent,
      },
      {
        path: 'nuevo',
        component: CreateUserPageComponent,
      },
      {
        path: 'editar/:id',
        component: EditUserPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
