import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VocalComponent } from './vocal/vocal.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VocalResultComponent } from './vocal-result/vocal-result.component';
import { TeamComponent } from './team/team.component';




@NgModule({
  declarations: [
    VocalComponent,
    HomeComponent,
    AdminComponent,
    VocalResultComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    HttpClientModule

  ]
})
export class PagesModule { }
