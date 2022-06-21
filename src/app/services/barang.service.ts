import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarangService {

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

  createBarang(data): Observable<any> {
    let url = `${this.endpoint}/barang/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  getBarange() {
    return this.http.get(`${this.endpoint}/barang/read`);
  }

  getKelompoke() {
    let url = `${this.endpoint}/kelompok/read`;
    return this.getRequest(url);
  }

  getSatuane() {
    let url = `${this.endpoint}/satuan/read`;
    return this.getRequest(url);
  }

  // getPelanggane() {
  //   return this.http.get(`${this.endpoint}/pelanggan/read`);
  // }

  getPelanggane(id): Observable<any> {
    let url = `${this.endpoint}/barang/read_search/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Get employee
  getBarang(id): Observable<any> {
    let url = `${this.endpoint}/barang/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  getIdUniq() {
    let url = `${this.endpoint}/barang/read_max`;
 //   return this.http.get(url);
    return this.getRequest(url);
  }

  // Update employee
  updateBarang(id, data): Observable<any> {
    let url = `${this.endpoint}/barang/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deleteBarang(id): Observable<any> {
    let url = `${this.endpoint}/barang/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling
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
