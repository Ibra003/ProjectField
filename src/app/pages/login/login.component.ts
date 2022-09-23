import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
if(!this.loginForm.valid){
return;
}
localStorage.setItem('user',this.loginForm.value)
this.router.navigate(['/'])

}

}
