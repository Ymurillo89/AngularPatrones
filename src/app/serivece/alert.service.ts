import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  

  AlertWarning(text: string){
    Swal.fire({
      title: 'Advertencia',
      text: text,
      icon: 'warning',
      confirmButtonText: 'Ok',
      confirmButtonColor: 'orange'
    })
  }

  AlertSuccess(text: string){
    Swal.fire({
      title: 'Muy bien!',
      text: text,
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: 'blue'
    })
  }

  AlertError(text: string){
    Swal.fire({
      title: 'Error!',
      text: text,
      icon: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: 'red'
    })
  }



  
}
