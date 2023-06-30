import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PriceView } from '../../core/models/price-view';
import { Specification } from '../../core/models/specification';


@Component({
  selector: 'app-price-view',
  templateUrl: './price-view.component.html',
  styleUrls: ['./price-view.component.css']
})
export class PriceViewComponent implements OnInit {
  @Input() public priceView: PriceView;
  @Output() public priceViewClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public getIconName(isSupport: boolean): string {
    return isSupport ? "done" : "clear";
  }

  public clickPriceButton() {
    this.priceViewClick.emit(this.priceView.headerName);
  }


}
