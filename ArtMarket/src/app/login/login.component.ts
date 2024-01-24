import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,NavbarComponent, RouterModule,FormsModule,ReactiveFormsModule,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public isLoginFormActive: boolean = true;
  loginForm: FormGroup;
  signupForm: FormGroup;
  signupError: string= ''; 

  constructor(
    private router: Router,
    private _newart: AuthService,  
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleForm() {
    if (this.isLoginFormActive) {
      this.router.navigate(['/register']);
    } else {
      this.router.navigate(['/login']);
    }

    
    this.isLoginFormActive = !this.isLoginFormActive;
  }
token : any;
  login() {
    const { email, password } = this.loginForm.value;

    this._newart.login({email, password}).subscribe(
      (res) => {
       this.token = res;
       localStorage.setItem('token' , this.token.mytoken)
      
        this.router.navigate(['/']);
      },
      (error) => {
        alert("Incorrect Email or Password");
        console.log("Errror login");
      }
    );
  }

  register() {
    const { name, email, password } = this.signupForm.value;
    if (this.signupForm.valid) {
    this._newart.register({name, email, password}).subscribe(
      (res) => {
        
        this.router.navigate(['/login']);
        alert('Successful registration!');
      },
      (error) => {
      
        console.error('Registration error', error);
        
        this.signupError = 'Registration failed. Please try again.';
      }
    );
  }else {
    console.log('Invalid form data. Please check your inputs.');
    this.signupError = 'Invalid form data. Please check your inputs.';
   
  }
}
}
