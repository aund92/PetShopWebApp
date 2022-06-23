import { Component, OnInit } from '@angular/core';
import {ShoppingCartDTO} from '../../dto/ShoppingCartDTO';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {TokenStorageService} from '../../service/token-storage.service';
import {Router} from '@angular/router';
import {DataSharingService} from '../../service/data-sharing.service';
import {Category} from '../../model/category';
import {HttpResponse} from '@angular/common/http';
import {CategoryService} from '../../service/category.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: ShoppingCartDTO[] = [];
  isLoggedIn = false;
  total = 0;
  categories?: Category[];
  teaser_1 = true;
  searchName = new FormControl('');
  constructor(private cartService: ShoppingCartService,
              private tokenStorageService: TokenStorageService,
              private dataSharingService: DataSharingService,
              protected categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
    this.findByCategory();
  }

  onPayment(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/home/shopping-payment']);
    } else {
      this.router.navigate(['/home/login']);
    }
  }
  findByName(): void {
    console.log(this.searchName.value);
    this.router.navigate(['/home/product-list',  { name: this.searchName.value}]);
  }

  onRemove(productId: any): void {
    this.cartService.removeItem(productId);
    this.items = this.cartService.getItems();
    this.dataSharingService.total.next(this.cartService.getItems().length);
    this.total = this.cartService.getTotal();
    this.dataSharingService.totalAmout.next(this.cartService.getTotal());
  }

  findByCategory(): void {
    this.categoryService.findByCategory().subscribe(
      (res: HttpResponse<Category[]>) => {
        this.categories = res.body || [];
      }
    );
  }

}
