import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sweetAlert() {
    Swal.fire({
      title: 'Are you sure want to save?',
      text: 'choose what your attention!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No, keep it'
    }).then((response: any) => {
      if (response.value) {
        Swal.fire(
          'Saved!',
          'Your form data has been saved.',
          'success'
        )
      } else if (response.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your data has rejected',
          'error'
        )
      }
    })
  }

}
