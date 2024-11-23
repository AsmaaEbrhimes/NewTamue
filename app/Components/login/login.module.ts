import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { TranslatingModule } from '../../Shared/translating/translating.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedModule } from '../../Shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    
    LoginComponent
  ],
  imports: [
    ToastModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
   
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    PasswordModule,
    RouterModule,
    TranslatingModule


  ],
  providers:[
    MessageService
  ]
})
export class LoginModule { }
