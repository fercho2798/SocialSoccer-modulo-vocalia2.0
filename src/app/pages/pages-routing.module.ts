import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { VocalComponent } from './vocal/vocal.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent},
  {path: 'home', component: HomeComponent},
  {path: 'vocal', component: VocalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
