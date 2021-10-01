import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BlankComponent } from './layout/blank/blank.component';
import { MainComponent } from './layout/main/main.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: BlankComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pages',
    component: MainComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
