import { Component, ElementRef, OnInit } from '@angular/core';
import { shopItem } from './models/shop-item.interface';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  shopList: shopItem[] = [];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const muffin: shopItem = {
      img: 'chocolate-muffin.png',
      name: 'Chocolate Muffin',
      description: 'This is a chocolate muffin.',
      price: 9.9,
      isAvailable: false,
    };
    const pumpkinMuffin: shopItem = {
      img: 'pumpkin-muffin.png',
      name: 'Pumpkin Muffin',
      description: 'This is a pumpkin muffin.',
      price: 9.9,
      isAvailable: false,
    };
    const coffee: shopItem = {
      img: 'coffee-1.png',
      name: 'Latte Coffee',
      description: 'This is a nice coffee.',
      price: 6.9,
      isAvailable: true,
    };
    this.shopList = [
      muffin,
      coffee,
      pumpkinMuffin,
      muffin,
      coffee,
      muffin,
      pumpkinMuffin,
      pumpkinMuffin,
    ];
  }

  scrollDown() {
    const element = this.elementRef.nativeElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}
