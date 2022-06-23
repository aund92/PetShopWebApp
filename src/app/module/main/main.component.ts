import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NewsDTO} from 'src/app/dto/news-dto';
import {PetDTO} from 'src/app/dto/pet-dto';
import {News} from 'src/app/model/news';
import {NewsService} from 'src/app/service/news.service';
import {ProductService} from 'src/app/service/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Product} from '../../model/product';
import {ProductDTO} from '../../dto/product-dto';
import Swal from 'sweetalert2';
import {ShoppingCartDTO} from '../../dto/ShoppingCartDTO';
import {DataSharingService} from '../../service/data-sharing.service';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

// import * as moment from 'moment';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  newsDTOs?: NewsDTO[];
  petDTONewests?: PetDTO[];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  petDTOSales?: PetDTO[];
  news?: News[];
  products?: Product[];
  productpins?: Product[];

  products2?: Product[];
  teaser_1 = false;
  categories?: Category[];
  searchName = new FormControl('');

  constructor(
    protected newsService: NewsService,
    protected productService: ProductService,
    protected categoryService: CategoryService,
    protected dataSharingService: DataSharingService,
    private cartService: ShoppingCartService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.findTop();
    this.findTop8ProductNews();
    this.findTop8ProductSales();
    this.findByCategory();
    this.findAll();
  }

  findTop(): void {

    this.newsService.findByAll().subscribe(
      (res: HttpResponse<News[]>) => {
        this.news = res.body || [];
      }
    );
  }

  findAll(): void {
    this.productService.findAll().subscribe(
      (res: HttpResponse<Product[]>) => {
        this.products = res.body || [];
        const d = new Date();
        let hour = d.getHours();
        if (hour > 0 && hour < 12) {
          this.products2 = this.products.filter(a => {
            return a.byTime == 'sang';
          });
        } else if (hour >= 12 && hour < 18) {
          this.products2 = this.products.filter(a => {
            return a.byTime == 'chieu';
          });
        } else {
          this.products2 = this.products.filter(a => {
            return a.byTime == 'toi';
          });
        }
        this.productpins=this.products.filter(t=>{
          return t.pin===1;
        })

      }
    );
  }

  findTop8ProductNews(): void {
    this.productService.findTop8ProductNews().subscribe(
      (res: HttpResponse<PetDTO[]>) => {
        this.petDTONewests = res.body || [];
      }
    );
  }

  findByName(): void {
    console.log(this.searchName.value);
    this.router.navigate(['/home/product-list',  { name: this.searchName.value}]);
  }

  findTop8ProductSales(): void {
    this.productService.findTop8ProductSale().subscribe(
      (res: HttpResponse<PetDTO[]>) => {
        this.petDTOSales = res.body || [];
      }
    );
  }

  findByCategory(): void {
    this.categoryService.findByCategory().subscribe(
      (res: HttpResponse<Category[]>) => {
        this.categories = res.body.sort((t,b)=>t.id-b.id) || [];
      }
    );
  }

  addToCart(item: Product): void {
    console.log(item);
    let productDTO = {} as ProductDTO;
    this.productService.detail(item.id).subscribe(
      (res: HttpResponse<ProductDTO>) => {
        // @ts-ignore
        productDTO = res.body || [];
        if (1 > item.inventory) {
          Swal.fire('Cảnh Báo', 'Không được nhập quá số lượng trong kho', 'warning');
        } else {
          const cartItem: ShoppingCartDTO = {
            quantity: 1,
            productId: item.id.toString(),
            productDTO: productDTO
          };

          this.cartService.addToCart(cartItem);
          Swal.fire('Thông báo', 'Thêm vào giỏ hàng thành công', 'success').then(() => {
            // this.router.onSameUrlNavigation = 'reload';
            this.dataSharingService.total.next(this.cartService.getItems().length);
            this.dataSharingService.totalAmout.next(this.cartService.getTotal());
            // @ts-ignore
            // this.document.defaultView.location.reload();
          });
          // window.alert('Your product has been added to the cart!');
        }
      }
    );
  }

}
