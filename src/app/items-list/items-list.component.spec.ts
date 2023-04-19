import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsListComponent } from './items-list.component';
import { shopItemMock } from './test/shopItemMock.mock';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize shopList with mock data', () => {
    component.shopList = [shopItemMock, shopItemMock, shopItemMock];

    expect(component.shopList.length).toBe(3);
    component.shopList.forEach((item) => {
      expect(item).toEqual(shopItemMock);
    });
  });
});
