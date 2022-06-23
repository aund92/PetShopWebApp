import { Component, OnInit } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Category} from '../../../model/category';
import {CategoryService} from '../../../service/category.service';
import {OrderService} from '../../../service/order.service';
import {Order} from '../../../model/Order';
import { MessageResponse } from 'src/app/response/message-response';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders?: Order[];
  constructor(protected orderService: OrderService,private router: Router,) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.orderService.findAll().subscribe(
      (res: HttpResponse<Order[]>) => {
        this.orders = res.body || [];
      }
    );
  }
  thanhToan(id: any): void {
    this.orderService.thanhToan(id).subscribe(
      (res: HttpResponse<MessageResponse>) => {
        Swal.fire('Thông báo', 'Xác nhận thanh toán', 'success').then(() => {
          // this.router.onSameUrlNavigation = 'reload';
          this.findAll();
        
          // @ts-ignore
          // this.document.defaultView.location.reload();
        });
      }
    );
  }
}
