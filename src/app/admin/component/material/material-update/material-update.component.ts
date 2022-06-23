import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MaterialService} from '../../../../service/material.service';
import {HttpResponse} from '@angular/common/http';
import {MessageResponse} from '../../../../response/message-response';
import Swal from 'sweetalert2';
import {Category} from '../../../../model/category';
import {Material} from '../../../../model/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-material-update',
  templateUrl: './material-update.component.html',
  styleUrls: ['./material-update.component.css']
})
export class MaterialUpdateComponent implements OnInit {

  submitted = false;
  message?: string;

  myForm = this.formBuilder.group({
    id: [],
    materialName: ['', [Validators.required, Validators.maxLength(50)]],
    quantity: [0, [Validators.required]],
    price:[0,[Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, protected materialService: MaterialService,
              private route: ActivatedRoute,
              private router:Router) {
  }

  ngOnInit(): void {
    this.findById(this.route.snapshot.params.id);
  }

  findById(id: any): void {
    this.materialService.findById(id).subscribe(
      (res: HttpResponse<Material>) => {
        this.myForm.patchValue(res.body);

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

    this.materialService.update(this.myForm.value).subscribe(
      (response: HttpResponse<MessageResponse>) => {
        this.message = response.body?.message;

        if (this.message === 'success') {
          Swal.fire('Thông báo', 'Chỉnh sửa nguyên liệu thành công', 'success');
          this.router.navigate(['home-admin/material']);
        } else if (this.message === 'failed') {
          Swal.fire('Thông báo', 'Chỉnh sửa nguyên liệu không thành công', 'error');
        }
      }
    );
  }

  onBack(): void {
    window.history.back();
  }

}
