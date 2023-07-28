import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  error: boolean = false;
  errorMsg: string = '';
  form: FormGroup=this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]],
  });

  constructor(private authService: AuthService, private router: Router,private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
   }
  

  login(): void {
    this.authService.login(this.form.value.email, this.form.value.password).subscribe(
      data => {
        // Handle successful login
        this.authService.saveUserToLocalStorage(this.form.value.username);
        this.router.navigate(['/shopping']); // Replace 'dashboard' with your desired route path
        this.error = false;
      },
      error => {
        this.authService.logout();
        this.error = true;
        this.errorMsg = 'Invalid username or password';
      }
    );
  }
}
