import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ImgswiperComponent } from './imgswiper/imgswiper.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';





@NgModule({
  declarations: [HeaderComponent, ImgswiperComponent],
  imports: [ CommonModule, FormsModule, IonicModule],
  exports:[HeaderComponent, ImgswiperComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
  
})
export class SharedComponentModule { }
