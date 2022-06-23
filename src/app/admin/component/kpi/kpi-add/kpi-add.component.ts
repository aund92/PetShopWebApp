import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MaterialService} from '../../../../service/material.service';
import {HttpResponse} from '@angular/common/http';
import {MessageResponse} from '../../../../response/message-response';
import Swal from 'sweetalert2';
import {KpiService} from '../../../../service/kpi.service';
import {Material} from '../../../../model/material';
import { Kpi } from 'src/app/model/kpi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kpi-add',
  templateUrl: './kpi-add.component.html',
  styleUrls: ['./kpi-add.component.css']
})
export class KpiAddComponent implements OnInit {

  submitted = false;
  message?: string;
  materials?: Material[];
  myForm = this.formBuilder.group({
    materialId: [null, [Validators.required]],
    quantityKpi: [0, [Validators.required]],
    bonus: [0, [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, protected kpiService: KpiService,
    private router:Router, protected materialService: MaterialService) {
  }

  ngOnInit(): void {
    this.materialService.findAll().subscribe(
      (res: HttpResponse<Material[]>) => {
        this.materials = res.body || [];
      }
    );
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    this.kpiService.create(this.myForm.value).subscribe(
      (response: HttpResponse<MessageResponse>) => {
        this.message = response.body?.message;

        if (this.message === 'success') {
          Swal.fire('Thông báo', 'Thêm Kpi phẩm thành công', 'success');
          this.router.navigate(['home-admin/kpi']);
        } else if (this.message === 'failed') {
          Swal.fire('Thông báo', 'Thêm Kpi không thành công', 'error');
        }
      }
    );
  }

  onBack(): void {
    window.history.back();
  }

}
