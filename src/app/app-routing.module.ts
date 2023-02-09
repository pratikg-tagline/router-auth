import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './feature/auth/authgaurd/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/auth/auth.module').then((auth) => auth.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./feature/admin/admin.module').then((admin) => admin.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./feature/user/user.module').then((user) => user.UserModule),
  },
  {
    path: 'deactivate',
    canLoad:[AuthGuard],
    loadChildren: () =>
      import('./feature/admin/admin.module').then((admin) => admin.AdminModule),
  },
  {
    path: 'contect',
    canLoad:[AuthGuard],
    loadChildren: () =>
      import('./feature/contect/contect.module').then((contect) => contect.ContectModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
