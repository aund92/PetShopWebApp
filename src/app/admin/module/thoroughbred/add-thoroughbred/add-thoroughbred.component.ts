import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageResponse } from 'src/app/response/message-response';
import { ThoroughbredService } from 'src/app/service/thoroughbred.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-thoroughbred',
  templateUrl: './add-thoroughbred.component.html',
  styleUrls: ['./add-thoroughbred.component.css']
})
export class AddThoroughbredComponent implements OnInit {

  submitted = false;
  message?:string;

  myForm = this.formBuilder.group({
    purebredLevel: ['', [Validators.required, Validators.max(100), Validators.min(1)]],
  });

  constructor(private formBuilder: FormBuilder,
    private router:Router, protected thoroughbredService: ThoroughbredService) { }

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

    this.thoroughbredService.create(this.myForm.value).subscribe(
      (response: HttpResponse<MessageResponse>) => {
        this.message = response.body?.message;

        if(this.message === 'success') {
          Swal.fire('Thông báo', 'Thêm Size thành công', 'success');
          this.router.navigate(['home-admin/list-thoroughbred']);
        } else if(this.message === 'failed') {
          Swal.fire('Thông báo', 'Thêm mức Size không thành công', 'error');
        }
      }
    )
  }

  onBack(): void {
    window.history.back();
  }

}
