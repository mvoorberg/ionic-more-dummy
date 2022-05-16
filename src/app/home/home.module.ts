import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { BosScrollIndicatorDirective } from '../bos-scroll-indicator.directive';
import { HighlightDirective } from '../highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,    

  ],
  declarations: [HomePage, BosScrollIndicatorDirective, HighlightDirective]
})
export class HomePageModule {}
