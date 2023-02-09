import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './feature/auth/authgaurd/auth.guard';
import { RoleGuard } from './feature/auth/authgaurd/role.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/auth/auth.module').then((auth) => auth.AuthModule),
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./feature/admin/admin.module').then((admin) => admin.AdminModule),
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./feature/user/user.module').then((user) => user.UserModule),
  },
  {
    path: 'deactivate',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./feature/admin/admin.module').then((admin) => admin.AdminModule),
  },
  {
    path: 'contect',
    canActivate: [AuthGuard],
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
