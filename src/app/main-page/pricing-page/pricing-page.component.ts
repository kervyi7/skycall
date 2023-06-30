import { Component, OnInit } from '@angular/core';
import { PriceView } from '../../core/models/price-view';


const priceView1: PriceView = {
  headerName: "SKYCALL LIGHT",
  specifications: [
    { isSupport: true, description: "6 users, 3 numbers" },
    { isSupport: true, description: "Basic SIP-Phone features" },
    { isSupport: false, description: "There are no integration with CRM systems" },
    { isSupport: false, description: "There are no analytics and monitoring" }
  ],
  price: "FREE",
  priceDescription: "LICENCE",
  priceButtonName: "DOWNLOAD PLUGIN"
}

const priceView2: PriceView = {
  headerName: "SKYCALL PRO",
  specifications: [
    { isSupport: true, description: "10 users, 6 numbers" },
    { isSupport: true, description: "Basic SIP-Phone features" },
    { isSupport: true, description: "Integration with CRM systems" },
    { isSupport: true, description: "Analytics and monitoring your team" }
  ],
  price: "10.00",
  priceDescription: "USD|Month for one user",
  priceButtonName: "CONTACT SALES"
}

const priceView3: PriceView = {
  headerName: "SKYCALL ENTERPRICE",
  specifications: [
    { isSupport: true, description: "25 users, 15 numbers" },
    { isSupport: true, description: "Setup Cloud Enterprice" },
    { isSupport: true, description: "Analytics and monitoring" },
    { isSupport: true, description: "Videocalls and Conferences"},
    { isSupport: true, description: "Corporative Chat Messenger"}
  ],
  price: "50.00",
  priceDescription: "USD|Month for one user",
  priceButtonName: "CONTACT SALES"
}

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent implements OnInit {
  priceView1: PriceView = priceView1;
  priceView2: PriceView = priceView2;
  priceView3: PriceView = priceView3;
  constructor() { }

  ngOnInit() {
  }

  public priceClick(value: string) {
    alert(value);
  }
}
