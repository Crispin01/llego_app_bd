import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarlocalPageRoutingModule } from './registrarlocal-routing.module';

import { RegistrarlocalPage } from './registrarlocal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarlocalPageRoutingModule
  ],
  declarations: [RegistrarlocalPage]
})
export class RegistrarlocalPageModule {}
