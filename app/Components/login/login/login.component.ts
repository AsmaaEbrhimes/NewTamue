import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";
import { MessageService } from 'primeng/api';
import { LoginServicesService } from '../login-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private FB: FormBuilder, private translate: TranslateService, private services:LoginServicesService , private Router:Router , private messageService: MessageService) { }




  loginForm!:FormGroup

  ngOnInit(){
this.CreateLoginForm()
  }

  CreateLoginForm(){
    this.loginForm=this.FB.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  LoginAccount(){
    let model = this.loginForm.value
    console.log(this.loginForm.value)
    this.services.Login(model).subscribe({
      next:(res:any)=>{
        localStorage.setItem('token' , res.token)
        this.Router.navigate(['/home']);
        this.show()
      },
      error:(err:any)=>{
        this.showError()
      }
    })
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

}
