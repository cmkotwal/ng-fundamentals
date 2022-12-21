import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastrServices {
  toastr: any;
  success(massage: string, title?: string) {
    this.toastr.success(massage, title);
  }

  info(massage: string, title?: string) {
    this.toastr.info(massage, title);
  }

  warning(massage: string, title?: string) {
    this.toastr.warning(massage, title);
  }

  error(massage: string, title?: string) {
    this.toastr.error(massage, title);
  }
}
