import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmigoPage } from './amigo.page';

const routes: Routes = [
  {
    path: '',
    component: AmigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmigoPageRoutingModule {}
