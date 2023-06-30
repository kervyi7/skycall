import { Component, OnInit } from '@angular/core';
import { WishList } from '../../core/models/wish-list';
import { Wish } from '../../core/models/wish'
import { UserWish } from 'src/app/core/models/user-wish';

const wishListConst: WishList = {
  sectionName: "WISH LIST",
  headerName1: "Have you any wishes about",
  headerName2: "SkyCall SIP-Phone plugin?",
  wishes: [
    { number: 1, text: "Streamline the interface - get rid of separators & empty space, use buttons instead!", result: 8707 },
    { number: 2, text: "Multiple SIP accounts", result: 6148 },
    { number: 3, text: "Option to load LDAP contacts", result: 5293 }
  ],
  viewFullListButtonName: "View full list",
  wishFormName: "Send your wish"
}

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishList: WishList = wishListConst;
  userWish: UserWish = new UserWish();
  constructor() { }

  ngOnInit() {
  }

  public toUpperCase(value: string): string {
    return value.toUpperCase();
  }
  public toAdd(wish: Wish) {
    wish.result++;
  }

  public toRemove(wish: Wish) {
    wish.result--;
  }

  public onSave() {
    alert(`Пользователь: ${this.userWish.name}/n Пожелание: ${this.userWish.wish} /n email: ${this.userWish.email}`)
  }

}
