import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import {Observable} from "rxjs";
import { Observable, throwError, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

//import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PegawaiService {
  endpoint:string = 'http://localhost:5000';
  //endpoint:string = 'https://safe-savannah-59594.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  createPegawai(data): Observable<any> {
    let url = `${this.endpoint}/pegawai/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  getPegawaie() {
    return this.http.get(`${this.endpoint}/pegawai/read`);
  }

  getLokasie() {
    return this.http.get(`${this.endpoint}/lokasi/read`);
  }

  getKodeKaryawan() {
    let url = `${this.endpoint}/pegawai/read_max`;
    return this.http.get(url);
  }

  // Get employee
  getPegawai(id): Observable<any> {
    let url = `${this.endpoint}/pegawai/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update employee
  updatePegawai(id, data): Observable<any> {
    let url = `${this.endpoint}/pegawai/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deletePegawai(id): Observable<any> {
    let url = `${this.endpoint}/pegawai/delete/${id}`;
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
