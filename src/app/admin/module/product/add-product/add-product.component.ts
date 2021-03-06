import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Material } from 'src/app/model/material';
import { Product } from 'src/app/model/product';
import { Thoroughbred } from 'src/app/model/thoroughbred';
import { MessageResponse } from 'src/app/response/message-response';
import { CategoryService } from 'src/app/service/category.service';
import { MaterialService } from 'src/app/service/material.service';
import { ProductService } from 'src/app/service/product.service';
import { ThoroughbredService } from 'src/app/service/thoroughbred.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  submitted = false;
  message?:string;

  selectedFiles?: FileList;
  files:any[] = [];
  imgURLs:any[] = [];

  categorys?:Category[];
  materials?:Material[];
  thoroughbreds?:Thoroughbred[];

  myForm = this.formBuilder.group({
    productName: ['', [Validators.required, Validators.maxLength(255)]],
    introduce: ['', [Validators.required, Validators.maxLength(500)]],
    description: ['', [Validators.required, Validators.maxLength(5000)]],
    priceImport: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    priceSell: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //quantityImport: ['', [Validators.required, Validators.min(1), Validators.max(1000000000)]],
    sale: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    thoroughbredId: ['', [Validators.required]],
    categoryId: ['', [Validators.required]],
    byTime: ['sang'],
    pin: [false],
    materialId:['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    protected productService: ProductService,
    protected categoryService: CategoryService,
    protected materialService: MaterialService,
    protected thoroughbredService:ThoroughbredService,
    private router:Router) { }

  ngOnInit(): void {
    this.findAllCategory();
    this.findAllThoroughbred();
    this.findAllMaterial();
  }

  findAllCategory(): void {
    this.categoryService.findAll().subscribe(
      (res:HttpResponse<Category[]>) => {
        this.categorys = res.body || [];
      }
    )
  }
  findAllMaterial(): void {
    this.materialService.findAll().subscribe(
      (res:HttpResponse<Material[]>) => {
        this.materials = res.body || [];
      }
    )
  }

  findAllThoroughbred(): void {
    this.thoroughbredService.findAll().subscribe(
      (res:HttpResponse<Thoroughbred[]>) => {
        this.thoroughbreds = res.body || [];
      }
    )
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;

    if(this.selectedFiles) {
      if(this.files.length + this.selectedFiles?.length > 3) {
        Swal.fire('Th??ng b??o', 'B???n ch??? ???????c ch???n t???i ??a 3 b???c ???nh', 'warning');
      } else {
        for(let i = 0; i < this.selectedFiles.length; i++) {
          let file: File | null = this.selectedFiles.item(i);

          if(file) {
            this.files?.push(file);

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
             this.imgURLs?.push({base64String: reader.result})
            };
          }
        }
      }
    }
  }

  deleteImage(i:any): void {
      this.imgURLs?.forEach((item, index) => {
        if (index === i) {
          this.imgURLs.splice(index, 1);
          this.files.splice(index, 1);
        }
      });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    let product:Product = {
      productName: this.myForm.value.productName,
      introduce:  this.myForm.value.introduce,
      description:  this.myForm.value.description,
      priceImport:  this.myForm.value.priceImport,
      priceSell:  this.myForm.value.priceSell,
      //:  this.myForm.value.quantityImport,
      sale:  this.myForm.value.sale,
      pin: this.myForm.value.pin ? 1 : 0,
      byTime: this.myForm.value.byTime
    };

    const formData: FormData = new FormData();

    if (this.files.length === 0) {
      Swal.fire('Th??ng b??o', 'B???n ph???i ch???n ??t nh???t 1 b?????c ???nh cho s???n ph???m', 'error');
    } else {
      this.files?.forEach((item, index) => {
        formData.append('files', item);
      });
      formData.append('category', JSON.stringify(this.myForm.value.categoryId));
      formData.append('thoroughbred', JSON.stringify(this.myForm.value.thoroughbredId));
      formData.append('product', JSON.stringify(product));
      formData.append('material', JSON.stringify(this.myForm.value.materialId));

      console.log(formData.get("category"));

      this.productService.create(formData).subscribe(
        (response: HttpResponse<MessageResponse>) => {
          this.message = response.body?.message;

          if(this.message === 'success') {
            Swal.fire('Th??ng b??o', 'Th??m s???n ph???m th??nh c??ng', 'success');
            this.router.navigate(['home-admin/list-product']);
          } else if(this.message === 'failed') {
            Swal.fire('Th??ng b??o', 'Th??m s???n ph???m kh??ng th??nh c??ng', 'error');
          }else if(this.message === 'dupplicate MaterialId') {
            Swal.fire('Th??ng b??o', 'Tr??ng l???p lo???i nguy??n li???u', 'error');
          }
        }
      )
      }
  }

  onBack(): void {
    window.history.back();
  }

}
