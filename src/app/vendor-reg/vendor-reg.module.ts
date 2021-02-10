import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorRegPageRoutingModule } from './vendor-reg-routing.module';

import { VendorRegPage } from './vendor-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorRegPageRoutingModule
  ],
  declarations: [VendorRegPage]
})
export class VendorRegPageModule {}
