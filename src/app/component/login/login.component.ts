import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, Validators} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logined = false;
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.maxLength(50)]]
  });

  constructor(private formBuilder: FormBuilder,
              protected loginService: LoginService,
              private router: Router,
              private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
  }
  get l() {
    return this.loginForm.controls;
  }
  onLogin(): void {
    this.logined = true;
    console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(this.loginForm.value).subscribe(
      result => {
        this.tokenStorageService.saveToken(result.body?.token || '');
        this.tokenStorageService.saveUser(result);

        const url = this.router.url;

        if(result.body.roles[0]==="ROLE_ADMIN"){
          console.log('navigate admin');
          
          this.router.navigate(['/home-admin/main-admin']);
        }else{
          window.location.reload();
        }
      },
      err => {
        Swal.fire('Thông báo', 'Tài khoản đăng nhập không đúng', 'error');
      }
    );
  }

}
