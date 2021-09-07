import { Component, OnInit } from '@angular/core';
import {debounceTime} from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserModel } from 'src/app/core/models/NewUser.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  newUser: NewUserModel;
  frmRegister: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) { 

                this.builderForm();
              }

  ngOnInit(): void {
  }

  builderForm(){
    this.frmRegister = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.frmRegister.valueChanges
    .pipe(debounceTime(500))
    .subscribe(values => {
      //console.log(values);
    });
  }

  onCancell(){
    this.router.navigate(['']);
  }

  onSubmit(event: Event){

    event.preventDefault();
    
    if(this.frmRegister.valid){

      const values = this.frmRegister.value;
      this.newUser = new NewUserModel(values.userName, values.email, values.password, 'user');
      console.log(this.newUser)
    }else{
      return;
    }
  }
}
