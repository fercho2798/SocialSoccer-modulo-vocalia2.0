import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocalComponent } from './vocal/vocal.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    VocalComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
