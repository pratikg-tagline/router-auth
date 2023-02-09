import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../service/authentication.service';

export interface LoginData {
  password: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signupForm!: FormGroup;
  submmited: boolean = false;
  logindata: LoginData[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.submmited = true;
      return;
    } else {
      this.authService.login(this.signupForm.value).subscribe((res:any)=>{
        if(res){
          localStorage.setItem('email',res.email)
          localStorage.setItem('role',res.role);
          this.router.navigate(['admin'])
        }else {
          this.toastr.error('Please Enter Valid Email Address');
        }
      })
      // if (this.authService.array === this.signupForm.value.array) {
      //   const data = {
      //     id: this.logindata.length + 1,
      //     ...this.signupForm.value,
      //   };
      //   localStorage.setItem('array', this.authService.array)
      //   localStorage.setItem('role','admin')
      //   this.logindata.push(data);
      //   this.router.navigate(['admin'])
      //   this.signupForm.reset();
      // }else if(this.authService.array == this.signupForm.value.email){
      //   const data = {
      //     id: this.logindata.length + 1,
      //     ...this.signupForm.value,
      //   };
      //   localStorage.setItem('array', this.authService.array)
      //   localStorage.setItem('role','user')
      //   this.logindata.push(data);
      //   this.router.navigate(['user'])
        
      // } 
   
      
    }
  }
  logOut(){
    localStorage.clear()
  }
  // register() {
  //   this.router.navigateByUrl('');
  // }
}
