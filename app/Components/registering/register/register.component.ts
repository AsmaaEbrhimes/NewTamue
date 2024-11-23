import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";
import { RegisterService } from '../register.service';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


 




  public registerForm!: FormGroup;
  public confirmPassword: string = '';
  public passwordsMismatch: boolean = false;


  constructor(private FB: FormBuilder, private translate: TranslateService, private services: RegisterService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.FormRegister()
  }






  FormRegister() {
    this.registerForm = this.FB.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    })
  }



  checkPasswords(e: any) {
    console.log(e.target.value)
    let value = e.target.value
    const password = this.registerForm.get('password')?.value;
    this.passwordsMismatch = password !== value && value !== '';
  }

  CreateAccount() {
    
    let model = this.registerForm.value
    this.services.Register(model).subscribe({
      next: (res: any) => {
        console.log(res)
        this.show()
        this.registerForm.reset()
      } ,
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

  // useLanguage(language: string): void {
  //   this.translate.use(language);
  // }

}
