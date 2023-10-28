import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmigoPageRoutingModule } from './amigo-routing.module';

import { AmigoPage } from './amigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmigoPageRoutingModule
  ],
  declarations: [AmigoPage]
})
export class AmigoPageModule {}
