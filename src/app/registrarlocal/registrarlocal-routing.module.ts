import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarlocalPage } from './registrarlocal.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarlocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarlocalPageRoutingModule {}
