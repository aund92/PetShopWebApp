import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Thoroughbred } from 'src/app/model/thoroughbred';
import { MessageResponse } from 'src/app/response/message-response';
import { ThoroughbredService } from 'src/app/service/thoroughbred.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-thoroughbred',
  templateUrl: './list-thoroughbred.component.html',
  styleUrls: ['./list-thoroughbred.component.css']
})
export class ListThoroughbredComponent implements OnInit {

  message?: string;
  id?:number;

  thoroughbreds?:Thoroughbred[];

  constructor(protected thoroughbredService: ThoroughbredService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.thoroughbredService.findAll().subscribe(
      (res:HttpResponse<Thoroughbred[]>) => {
        this.thoroughbreds = res.body || [];
      }
    )
  }

  delete(id: any): void {
    this.thoroughbredService.delete(id).subscribe(
      (res: HttpResponse<MessageResponse>) => {
        this.message = res.body?.message || '';

        if(this.message === 'successfully') {
          Swal.fire('Thông báo', 'Xóa thành công', 'success');
        } else if(this.message === 'failed') {
          Swal.fire('Thông báo', 'Xóa không thành công', 'error');
        }
        
        this.findAll()
      })
  }

  confirmDelete(): void {
    this.thoroughbredService.delete(this.id).subscribe(
      (res: HttpResponse<MessageResponse>) => {
        this.message = res.body?.message || '';

        if(this.message === 'success') {
          Swal.fire('Thông báo', 'Xóa thành công', 'success');
        } else if(this.message === 'failed') {
          Swal.fire('Thông báo', 'Xóa không thành công', 'error');
        }
        
        this.findAll()
      }
    )
  }

}
