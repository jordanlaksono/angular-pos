import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosService {

  endpoint:string = 'http://localhost:5000';
  //endpoint:string = 'https://safe-savannah-59594.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  public getRequest(url, text = false){
    let opt: any = {
      headers: new HttpHeaders({'Content-Type': 'application/json',  accept: 'text/plain'}),
      responseType: 'text'
    };
    if(!text) opt = {}

      return this.http.get(url, opt)
      .toPromise().then((data: any) => {return data; });
  }

  getBarange() {
    return this.http.get(`${this.endpoint}/barang/read`).toPromise().then((data: any) => { return data; });
  }

  getNoFaktur() {
    // let url = `${this.endpoint}/penjualan/read_max`;
    // return this.http.get(url);
    let url = `${this.endpoint}/penjualan/read_max`;
    return this.getRequest(url);
  }

  getPelanggane() {
    return this.http.get(`${this.endpoint}/pelanggan/read`);
  }

  createPenjualan(data): Observable<any> {
    let url = `${this.endpoint}/penjualan/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  penjualanGetPotonganPerBarang(){
   // let url = this.serverUrl + "Po_penjualan/getDiskone";
    let url = `${this.endpoint}/penjualan/getDiskone`;
    return this.http.get(url).toPromise().then((data: any) => {return data; });
  }

  getDataPelanggan(){
    // let url = this.serverUrl + "Po_penjualan/getDiskone";
     let url = `${this.endpoint}/pelanggan/getPelanggane`;
     return this.http.get(url).toPromise().then((data: any) => {return data; });
   }

  penjualanGetPotonganMinPembelian(){
    let url = `${this.endpoint}/penjualan/getAllMinBarang`;
    return this.http.get(url).toPromise().then((data: any) => {return data; });
  }

  penjualanGetPotonganMinPembelianCampuran(){
    let url = `${this.endpoint}/penjualan/getAllCampuranBarang`;
    return this.http.get(url).toPromise().then((data: any) => {return data; });
  }

  penjualanGetPotonganPelanggan(){
    let url = `${this.endpoint}/penjualan/getDiskon`;
    return this.http.get(url).toPromise().then((data: any) => {return data; });
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
