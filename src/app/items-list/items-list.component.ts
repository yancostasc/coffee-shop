import { Component, OnInit } from '@angular/core';
import { shopItem } from './models/shop-item.interface';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  shopList: shopItem[] = [{
    img: 'pumpkin-muffin.png',
    name: 'Pumpkin Muffin',
    description: 'this is a pumpkin muffin!',
    price: '$8.90',
    disabled: false
  }]

  ngOnInit(): void {
    const muffin = [{
      img: 'chocolate-muffin.png',
      name: 'Chocolate Muffin',
      description: 'this is a chocolate muffin...',
      price: '$10.90',
      disabled: false
    }]
    const coffee = [{
      img: 'coffee-1.png',
      name: 'Latte Coffee',
      description: 'this is a nice coffee.',
      price: '$6.90',
      disabled: true
    }]
    this.shopList = [... this.shopList, ... coffee, ... muffin, ... muffin, ... this.shopList]
  }

}
