import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedComponentModule } from '../sharedComponent/shared-component.module';
import { CardsComponent } from '../sharedComponent/cards/cards.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    TranslateModule,
    SharedComponentModule
 ],
  declarations: [Tab1Page,CardsComponent]
})
export class Tab1PageModule {}
