import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '0px'
      })),
      state('closed', style({
        top: '-70px'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ],
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  linkSelected: string;
  isOpen: boolean = false;
  contentElement: any;

  constructor(public translate: TranslateService, private zone: NgZone) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.contentElement = document.getElementById("content");
    window.addEventListener('scroll', this.scrollEvent.bind(this), true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent.bind(this), true);
  }

  public selectLink(link: string) {
    this.linkSelected = link;
  }

  public isSelected(link: string): boolean {
    return this.linkSelected == link;
  }

  public changeTranslate(lang: string) {
    this.translate.use(lang);
  }

  private scrollEvent(): void {
    if (this.contentElement.scrollTop > 99) {
      this.zone.run(() => this.isOpen = true)
    } else {
      this.zone.run(() => this.isOpen = false)
    }
  }

  public getState(): string {
    return this.isOpen ? 'open' : 'closed';
  }

}
