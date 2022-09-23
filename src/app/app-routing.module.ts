import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { PersonaldetailsComponent } from './pages/personaldetails/personaldetails.component';
import { FormComponent } from './pages/form/form.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { FinalreportComponent } from './pages/finalreport/finalreport.component';

const routes: Routes = [
{path:'',component:NavbarComponent,
children:[
{
path:'',component:HomeComponent
},
{path:'aboutus',component:AboutUsComponent},
{path:'contact',component:ContactComponent},
{path:'complaint',component:ComplaintComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'navbar',component:NavbarComponent},
{path:'forget-passward',component:ForgetPasswordComponent},
{path:'footer',component:FooterComponent},
{path:'main-content',component:MainContentComponent,

children:[
  {path:'',component:PersonaldetailsComponent},
  {path:'form',component:FormComponent},
  {path:'payment',component:PaymentComponent},
  {path:'finalreport',component:FinalreportComponent}
  ]


  }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
