import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CategoryService} from '../../../../service/category.service';
import {MaterialService} from '../../../../service/material.service';
import {HttpResponse} from '@angular/common/http';
import {MessageResponse} from '../../../../response/message-response';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.css']
})
export class MaterialAddComponent implements OnInit {

  submitted = false;
  message?: string;

  myForm = this.formBuilder.group({
    materialName: ['', [Validators.required, Validators.maxLength(50)]],
    quantity: [0, [Validators.required]],
    price:[0, [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, protected materialService: MaterialService,
    private router:Router) {
  }

  ngOnInit(): void {
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    this.materialService.create(this.myForm.value).subscribe(
      (response: HttpResponse<MessageResponse>) => {
        this.message = response.body?.message;

        if (this.message === 'success') {
          Swal.fire('Thông báo', 'Thêm nguyên liệu thành công', 'success');
          this.router.navigate(['home-admin/material']);
        } else if (this.message === 'failed') {
          Swal.fire('Thông báo', 'Thêm nguyên liệu không thành công', 'error');
        }
        
      }
     
    );
  }

  onBack(): void {
    window.history.back();
  }

}
