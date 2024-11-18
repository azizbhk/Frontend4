import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { voyagesComponent } from './voyages/voyages.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {path: "voyages", component : voyagesComponent,canActivate:[AuthGuard],
  data : {roles:['ADMIN']}}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
