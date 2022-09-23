import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
ngForm: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onNextStep(){
this.router.navigate(['/form']);

  }
alertWithSuccess(){
  Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
}

}
