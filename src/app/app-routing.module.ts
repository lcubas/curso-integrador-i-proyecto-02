import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'citas',
    loadChildren: () =>
      import('./features/appoiment/appoiment.module').then((m) => m.AppoimentModule),
  },
  {
    path: 'doctores',
    loadChildren: () =>
      import('./features/doctor/doctor.module').then((m) => m.DoctorModule),
  },
  {
    path: 'especialidades',
    loadChildren: () =>
      import('./features/speciality/speciality.module').then((m) => m.SpecialityModule),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'reportes',
    loadChildren: () =>
      import('./features/report/report.module').then((m) => m.ReportModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
