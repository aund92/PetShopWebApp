import { Component, OnInit } from '@angular/core';
import {PetDTO} from '../../dto/pet-dto';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ShareDataService} from '../../service/share-data.service';
import {HttpResponse} from '@angular/common/http';
import {News} from '../../model/news';
import {NewsService} from '../../service/news.service';
import {Category} from '../../model/category';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  teaser_1 = true;
  categoryId?: any;
  news?: News[];
  type: string;
  private sub: any;
  products?: PetDTO[];
  categories?: Category[];
  searchName = new FormControl('');
  constructor(private route: ActivatedRoute,
              protected productService: ProductService,
              protected newsService: NewsService,
              protected categoryService: CategoryService,
              protected shareDataService: ShareDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.findByAll();
    this.findByCategory();
  }

  findByCategory(): void {
    this.categoryService.findByCategory().subscribe(
      (res: HttpResponse<Category[]>) => {
        this.categories = res.body || [];
      }
    );
  }
  findByAll(): void {
    this.newsService.findByAll().subscribe(
      (res: HttpResponse<News[]>) => {
        this.news = res.body || [];
      }
    )
  }

  findByName(): void {
    console.log(this.searchName.value);
    this.router.navigate(['/home/product-list',  { name: this.searchName.value}]);
  }

}
