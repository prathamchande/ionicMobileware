import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/service/constants/constants.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  implements OnInit {
  cardBlock:any=[];
  constructor(private constant:ConstantsService) { }

  ngOnInit() {
    this.cardBlock = this.constant.blocks
  }

}
