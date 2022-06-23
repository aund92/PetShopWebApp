import {Component, OnInit} from '@angular/core';
import {Material} from '../../../../model/material';
import {MaterialService} from '../../../../service/material.service';
import {HttpResponse} from '@angular/common/http';
import {MessageResponse} from '../../../../response/message-response';
import Swal from 'sweetalert2';
import {KpiService} from '../../../../service/kpi.service';
import {Kpi} from '../../../../model/kpi';

@Component({
  selector: 'app-kpi-list',
  templateUrl: './kpi-list.component.html',
  styleUrls: ['./kpi-list.component.css']
})
export class KpiListComponent implements OnInit {

  materials: Kpi[] = [];

  constructor(protected service: KpiService) {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.service.findAll().subscribe(
      (res: HttpResponse<Kpi[]>) => {
        this.materials = res.body || [];
      }
    );
  }

  delete(id: any): void {
    this.service.delete(id).subscribe(
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

}
