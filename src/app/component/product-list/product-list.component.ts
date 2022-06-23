import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ShareDataService} from '../../service/share-data.service';
import {HttpResponse} from '@angular/common/http';
import {PetDTO} from '../../dto/pet-dto';
import {Product} from '../../model/product';
import {ProductDTO} from '../../dto/product-dto';
import Swal from 'sweetalert2';
import {ShoppingCartDTO} from '../../dto/ShoppingCartDTO';
import {DataSharingService} from '../../service/data-sharing.service';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {Category} from '../../model/category';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categoryId?: any;
  searchName: string;
  type: string;
  private sub: any;
  products?: PetDTO[];
  teaser_1 = true;
  categories?: Category[];
  searchName2 = new FormControl('');
  constructor(private route: ActivatedRoute,
              protected productService: ProductService,
              protected categoryService: CategoryService,
              protected shareDataService: ShareDataService,
              protected dataSharingService: DataSharingService,
              private cartService: ShoppingCartService,
              private router: Router,) { }

  ngOnInit(): void {
    // this.categoryId = this.route.snapshot.params.categoryId;
    // console.log('testtt');
    this.route.queryParams.subscribe(params => {
      console.log('name', params);
      this.type = params['type'];

    });

    this.sub = this.route.params.subscribe(params => {
      this.categoryId = params['categoryId']; // (+) converts string 'id' to a number
      console.log('param', params);
      this.searchName = params['name'];
      // In a real app: dispatch action to load the details here.
      console.log('id', this.categoryId);
      this.findProducts();
      this.findByCategory();
    });




  }

  findByName(): void {
    // console.log(this.searchName.value);
    this.router.navigate(['/home/product-list',  { name: this.searchName2.value}]);
  }

  findByCategory(): void {
    this.categoryService.findByCategory().subscribe(
      (res: HttpResponse<Category[]>) => {
        this.categories = res.body || [];
      }
    );
  }

  findProducts(): void {
    if (this.categoryId) {
      this.productService.findByCategory(this.categoryId).subscribe(
        (res: HttpResponse<PetDTO[]>) => {
          this.products = res.body || [];
        }
      );
    } else {
      if (this.type) {
        this.productService.findTop8ProductSale().subscribe(
          (res: HttpResponse<PetDTO[]>) => {
            this.products = res.body || [];
          }
        );
      } else {
        this.productService.findAll().subscribe(
          (res: HttpResponse<PetDTO[]>) => {
            this.products = res.body || [];
            console.log('name=' + this.searchName);
            if (this.searchName){
              this.products = this.products.filter(u => {
                  console.log(u);
                  return u.productName.toLowerCase().includes(this.searchName.toLowerCase());
              });
            }
          }
        );
      }

    }

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
