import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Thoroughbred } from 'src/app/model/thoroughbred';
import { MessageResponse } from 'src/app/response/message-response';
import { ThoroughbredService } from 'src/app/service/thoroughbred.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-thoroughbred',
  templateUrl: './update-thoroughbred.component.html',
  styleUrls: ['./update-thoroughbred.component.css']
})
export class UpdateThoroughbredComponent implements OnInit {

  thoroughbred:Thoroughbred | null = null;

  submitted = false;
  message?:string;

  myForm = this.formBuilder.group({
    id: ['', [Validators.required]],
    purebredLevel: ['', [Validators.required, Validators.maxLength(50)]],
  });

  constructor(
    private formBuilder: FormBuilder, 
    protected thoroughbredService: ThoroughbredService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findById(this.route.snapshot.params.id);
  }

  findById(id:any): void {
    this.thoroughbredService.findById(id).subscribe(
      (res:HttpResponse<Thoroughbred>) => {
        this.thoroughbred = res.body;
        if(this.thoroughbred) {
          this.updateForm(this.thoroughbred);
        }
      }
    );
  }

  get f() {
    return this.myForm.controls;
  }

  updateForm(thoroughbred: Thoroughbred): void {
    this.myForm.patchValue({
      id: thoroughbred.id,
      purebredLevel: thoroughbred.purebredLevel
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    this.thoroughbredService.update(this.myForm.value).subscribe(
      (response:HttpResponse<MessageResponse>) => {
        this.message = response.body?.message;

        if(this.message === 'success') {
          Swal.fire('Thông báo', 'Cập nhật mức độ thành công', 'success');
        } else if(this.message === 'failed') {
          Swal.fire('Thông báo', 'Cập nhật mức độ không thành công', 'error');
        }
      }
    )
  }

  onBack(): void {
    window.history.back();
  }


}
