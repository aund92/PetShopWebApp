import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../service/category.service';
import {MaterialService} from '../../../../service/material.service';
import {Material} from '../../../../model/material';
import {HttpResponse} from '@angular/common/http';
import {Category} from '../../../../model/category';
import {MessageResponse} from '../../../../response/message-response';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  materials: Material[] = [];

  constructor(protected materialService: MaterialService) {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.materialService.findAll().subscribe(
      (res: HttpResponse<Material[]>) => {
        this.materials = res.body || [];
      }
    );
  }

  delete(id: any): void {
    this.materialService.delete(id).subscribe(
      (res: HttpResponse<MessageResponse>) => {

        if (res.body?.message === 'success') {
          Swal.fire('Thông báo', 'Xóa thành công', 'success');
        } else {
          Swal.fire('Thông báo', 'Xóa không thành công', 'error');
        }

        this.initData();
      }
    );

  }
  confirmDelete(){
    
  }

}
