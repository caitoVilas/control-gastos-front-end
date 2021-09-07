import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { JwtDtoModel } from 'src/app/core/models/JwtDto.model';
import { UserLoginModel } from 'src/app/core/models/UserLogin.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  userLogin: UserLoginModel;
  jwtDto: JwtDtoModel;
  frmLogin: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {

                this.builderForm();
               }

  ngOnInit(): void {
  }

  builderForm(){
    this.frmLogin = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.frmLogin.valueChanges
    .pipe(debounceTime(500))
    .subscribe(values => {
      //console.log(values);
    });
  }

  onSubmit(event: Event){

    event.preventDefault();

    if(this.frmLogin.valid){

      const values = this.frmLogin.value;
      this.userLogin = new UserLoginModel(values.userName, values.password);
      console.log(this.userLogin)
    }else{
      return;
    }
  }

  onCancell(){
    this.router.navigate(['']);
  }

}
