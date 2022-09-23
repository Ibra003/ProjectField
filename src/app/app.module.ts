import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule}from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule}from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule}from '@angular/material/progress-spinner';
import { NgImageSliderModule } from 'ng-image-slider';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { RouterModule } from '@angular/router';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PersonaldetailsComponent } from './pages/personaldetails/personaldetails.component';
import { FormComponent } from './pages/form/form.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { FinalreportComponent } from './pages/finalreport/finalreport.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    ComplaintComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    MainContentComponent,
    PersonaldetailsComponent,
    FormComponent,
    PaymentComponent,
    FinalreportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    NgImageSliderModule,
    FormsModule,
    MatSidenavModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
