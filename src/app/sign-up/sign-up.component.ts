import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignupComponent {
  signupForm!: FormGroup;

  @ViewChild("txtUsername")
  txtUsername!: ElementRef;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.minLength(5), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(5), Validators.required]],
    });
  }

  registerUser() {
    if (this.signupForm.invalid || this.signupForm.pristine){
      alert("Please enter correct details to continue");
      return;
    }
    this.authService.signUp(this.signupForm.value).subscribe({
      next: value => {
        this.router.navigateByUrl("/login");
      },
      error: err => {
        alert(err!.error.message);
        (this.txtUsername.nativeElement as HTMLInputElement).select();
        (this.txtUsername.nativeElement as HTMLInputElement).focus();
      }
    });
  }
}
