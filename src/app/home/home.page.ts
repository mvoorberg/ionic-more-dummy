import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  scrollMax: number = 0;
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  scrollChanged(pos: any) {
    // if (pos > 1000 && !this.spiritScrolled && this.showScrollAnimation < 10) {
    //   this.showScrollAnimation++;
    //   this._storage.set('showScrollAnimation', this.showScrollAnimation);  
    //   this.spiritScrolled = true;
    // }
    console.log({"pos": pos.detail.currentY});
    // this.scrollMax = Math.max(this.scrollMax, pos.detail.currentY);
    this.scrollMax = pos.detail.currentY;
  }

}
