import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface UsersDetails {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: any;
  mobileNo: string;
  gender: string;
  isToRead: boolean;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  genders = [
    {
      name: 'Male',
      value: 'male',
    },
    {
      name: 'Female',
      value: 'female',
    },
  ];
  roles = [
    {
      name: 'Admin',
      value: 'admin',
    },
    {
      name: 'Manager',
      value: 'Manager',
    },
    {
      name: 'Employee',
      value: 'Employee',
    },
  ];
  date = new Date('2001/9/6');
  today = new Date().toISOString().split('T')[0];
  usersDetails: UsersDetails[] = [];
  submitted = false;
  profileForm!: FormGroup;
  toggle: boolean = false;
  email!: string;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createProfileForm();
  }
  createProfileForm() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      mobileNo: ['', Validators.required],
      gender: ['', Validators.required],
      roles: ['', Validators.required],
      isToRead: [false, Validators.requiredTrue],
    });
  }

  get profileFormControl() {
    return this.profileForm.controls;
  }

  blockCharacter(e: any) {
    var x = e.which || e.keycode;
    if (x >= 42 && x <= 57) return true;
    else return false;
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      this.submitted = true;
      return;
    } else {
      let data = {
        id: this.usersDetails.length + 1,
        ...this.profileForm.value,
      };
      this.usersDetails.push(data);
      // this.email = this.profileForm.value.email
      localStorage.setItem('email', this.profileForm.value.email);
      localStorage.setItem('role', this.profileForm.value.roles);
      this.router.navigateByUrl('/login');
      this.submitted = false;
    }
    this.submitted = false;
    this.profileForm.reset();
  }
}
