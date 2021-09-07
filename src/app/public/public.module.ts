import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/conteiners/home/home.component';

import { MenuNavComponent } from './home/components/menu-nav/menu-nav.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { RegisterComponent } from './register/container/register/register.component';
import { LoginComponent } from './login/containers/login/login.component';
import { HeaderComponent } from './home/components/header/header.component';
import { FormRegisterComponent } from './register/components/form-register/form-register.component';
import { FormLoginComponent } from './login/components/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    MenuNavComponent,
    RegisterComponent,
    FooterComponent,
    FormRegisterComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    ReactiveFormsModule
  ]
  
})
export class PublicModule { }
