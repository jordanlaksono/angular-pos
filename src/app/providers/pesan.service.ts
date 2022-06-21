import { Component, HostBinding, Injectable, TemplateRef } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//import 'rxjs/add/operator/toPromise';

export class PesanService {

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  constructor(
    private toastrService: NbToastrService,
    ) {
  }

  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `Transaksi Berhasil di simpan`,
      { position, status });
  }

  showLoadingGagal(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `Gagal Memuat Data`,
      { position, status });
  }

  showToast_gagal(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `Transaksi Gagal di simpan`,
      { position, status });
  }

  showToast_pesan(kata, position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      // `Gagal Memuat Data Potongan Pembelian Per Barang, Periksa Koneksi Anda.`,
      {kata, position, status });
  }

  showToast_pelanggan(position, status){
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `Data Di Keranjang DiKosongkan`,
      { position, status });
  }


  // public showLoading(title){
  // 	let loading = this.loading.create({
  // 		content: title
  // 	});
  // 	loading.present();
  // 	return loading;
  // }

}
