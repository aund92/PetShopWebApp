import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ShareDataService} from '../../service/share-data.service';
import {PetDTO} from '../../dto/pet-dto';
import {HttpResponse} from '@angular/common/http';
import {ProductDTO} from '../../dto/product-dto';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import Swal from 'sweetalert2';
import {ShoppingCartDTO} from '../../dto/ShoppingCartDTO';
import {DOCUMENT} from '@angular/common';
import {DataSharingService} from '../../service/data-sharing.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId?: string;
  private sub: any;
  productDTO = new ProductDTO();
  productRelates: PetDTO[] = [];
  quantity = 1;
  constructor(private route: ActivatedRoute,
              private router: Router,
              protected productService: ProductService,
              protected categoryService: CategoryService,
              protected shareDataService: ShareDataService,
              protected dataSharingService: DataSharingService,
              private cartService: ShoppingCartService,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.productId = params['productId']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      console.log('id', this.productId);
      this.findProduct();
    });

  }

  findProduct(): void {
    this.productService.detail(this.productId).subscribe(
      (res: HttpResponse<ProductDTO>) => {
        // @ts-ignore
        this.productDTO = res.body || [];
        this.findProductByCate(this.productDTO.category.id);
      }
    );
  }

  findProductByCate(id: any): void {
    this.productService.findByCategory(id).subscribe(
      (res: HttpResponse<PetDTO[]>) => {
        // @ts-ignore
        this.productRelates = res.body || [];
      }
    );
  }

  addToCart(item: ProductDTO): void {
    if (this.quantity > item.inventory) {
      Swal.fire('C???nh B??o', 'Kh??ng ???????c nh???p qu?? s??? l?????ng trong kho', 'warning');
    } else {
      const cartItem: ShoppingCartDTO = {
        quantity: this.quantity,
        productId: this.productId,
        productDTO: this.productDTO
      };

      this.cartService.addToCart(cartItem);
      Swal.fire('Th??ng b??o', 'Th??m v??o gi??? h??ng th??nh c??ng', 'success').then(() => {
        // this.router.onSameUrlNavigation = 'reload';
        this.dataSharingService.total.next(this.cartService.getItems().length);
        // @ts-ignore
        // this.document.defaultView.location.reload();
      });
      // window.alert('Your product has been added to the cart!');
    }

  }
  onMinus(): void {
    if (this.quantity === 1) {
      Swal.fire('Th??ng b??o', 'S??? l?????ng s???n ph???m ph???i l???n h??n 0', 'warning');
      // this.quantityTotal = this.myForm.value.quantity;
    } else {
      this.quantity = this.quantity - 1;
    }



  }

  onPlus(): void {
    this.quantity = this.quantity + 1;

    // if (this.productDTO?.quantityImport && this.quantity > this.productDTO?.quantityImport) {
    //   Swal.fire('Th??ng b??o', 'S??? l?????ng s???n ph???m nhi???u h??n s??? l?????n ??ang c??', 'warning');
    //   this.quantity = 1;
    //   // this.myForm.get("quantity")?.setValue(1);
    // } else {
    //   // this.myForm.get("quantity")?.setValue( this.quantityTotal);
    // }
  }
}
