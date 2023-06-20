import { Component, ElementRef, OnInit } from '@angular/core';
import { shopItem } from './models/shop-item.interface';
import { CoffeeService } from './coffee-service.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  providers: [CoffeeService],
})
export class ItemsListComponent implements OnInit {
  shopList: shopItem[] = [];
  coffeeData: any;

  constructor(
    private elementRef: ElementRef,
    private coffeeService: CoffeeService
  ) {}

  ngOnInit(): void {
    const defaultMuffin: shopItem = this.createDefaultMuffin();
    this.shopList = [
      defaultMuffin,
      defaultMuffin,
      defaultMuffin,
      defaultMuffin,
    ];
    this.updateShopListWithFiles();
  }

  createDefaultMuffin(): shopItem {
    return {
      img: '/assets/mug-hot-solid.svg',
      name: 'Shop Product',
      description: 'This is a random shop product!',
      price: 1.0,
      isAvailable: false,
    };
  }

  updateShopListWithFiles(): void {
    const updatedShopList: shopItem[] = [];

    for (const originalMuffin of this.shopList) {
      const updatedMuffin: shopItem = { ...originalMuffin };

      this.randomizePriceAndSetImage(updatedMuffin);

      updatedShopList.push(updatedMuffin);
    }
    this.shopList = updatedShopList;
  }

  randomizePriceAndSetImage(updatedMuffin: shopItem): void {
    const randomPrice = Math.random() * (20 - 1) + 1;
    updatedMuffin.price = parseFloat(randomPrice.toFixed(2));

    this.coffeeService.getFileFromCoffeeData().subscribe((file: string) => {
      updatedMuffin.img = file;
    });
  }

  scrollDown() {
    const element = this.elementRef.nativeElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}
