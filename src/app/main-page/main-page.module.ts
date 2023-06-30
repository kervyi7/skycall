import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { HeaderPageComponent } from './header-page/header-page.component'
import { CustomMaterialModule } from '../core/custom-material.module';
import { DescriptionPageComponent } from './description-page/description-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { PriceViewComponent } from './price-view/price-view.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [
        MainPageComponent,
        HeaderPageComponent,
        DescriptionPageComponent,
        FeaturesPageComponent,
        PricingPageComponent,
        PriceViewComponent,
        WishListComponent,
        ContactPageComponent
    ],
    imports: [
        CustomMaterialModule,
        ScrollToModule.forRoot(),
        TranslateModule
    ],
    exports: [MainPageComponent],
    providers: [],
    bootstrap: []
})
export class MainPageModule { }
