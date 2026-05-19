import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class OcupadoService {

  requestCount = 0;

  constructor( private spinner: NgxSpinnerService) {}

  ocupado() {
    this.requestCount++;
    this.spinner.show(undefined,{type: 'ball-spin-fade', bdColor: 'rgba(51,51,51,0.8)', color: '#fff'});
  }

  desocupado() {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.requestCount = 0;
      this.spinner.hide();
    }
  }
}
