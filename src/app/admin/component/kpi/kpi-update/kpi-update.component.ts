import {Component, OnInit} from '@angular/core';
import {Material} from '../../../../model/material';
import {FormBuilder, Validators} from '@angular/forms';
import {KpiService} from '../../../../service/kpi.service';
import {MaterialService} from '../../../../service/material.service';
import {HttpResponse} from '@angular/common/http';
import {MessageResponse} from '../../../../response/message-response';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {Kpi} from '../../../../model/kpi';

@Component({
  selector: 'app-kpi-update',
  templateUrl: './kpi-update.component.html',
  styleUrls: ['./kpi-update.component.css']
})
export class KpiUpdateComponent implements OnInit {

  submitted = false;
  message?: string;
  materials?: Material[];
  kpiId = 0;
  myForm = this.formBuilder.group({
    materialId: [null, [Validators.required]],
    quantityKpi: [0, [Validators.required]],
    bonus: [0, [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, protected kpiService: KpiService,
              private router: Router, protected materialService: MaterialService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.kpiId = this.route.snapshot.params.id;
    this.kpiService.findById(this.route.snapshot.params.id).subscribe(
      (res: HttpResponse<Kpi>) => {
        this.myForm.patchValue(res.body);
        this.myForm.get('materialId').patchValue(res.body.material.id);
      }
    );

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

    this.kpiService.update(this.kpiId, this.myForm.value).subscribe(
      (response: HttpResponse<MessageResponse>) => {
        this.message = response.body?.message;

        if (this.message === 'success') {
          Swal.fire('Thông báo', 'Cập nhật Kpi thành công', 'success');
          this.router.navigate(['home-admin/kpi']);
        } else if (this.message === 'failed') {
          Swal.fire('Thông báo', 'Cập nhật Kpi không thành công', 'error');
        }
      }
    );
  }

  onBack(): void {
    window.history.back();
  }
}
