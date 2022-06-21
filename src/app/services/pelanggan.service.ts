import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {

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

  createPelanggan(data): Observable<any> {
    let url = `${this.endpoint}/pelanggan/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  getPelanggane() {
    return this.http.get(`${this.endpoint}/pelanggan/read`);
  }

  getTope() {
    return this.http.get(`${this.endpoint}/top/read`);
  }

  getKodePelanggan() {
    let url = `${this.endpoint}/pelanggan/read_max`;
    return this.getRequest(url);
  }

  // Get employee
  getPelanggan(id): Observable<any> {
    let url = `${this.endpoint}/pelanggan/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update employee
  updatePelanggan(id, data): Observable<any> {
    let url = `${this.endpoint}/pelanggan/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deletePelanggan(id): Observable<any> {
    let url = `${this.endpoint}/pelanggan/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  getIdUniq() {
    let url = `${this.endpoint}/pelanggan/read_max`;
    return this.getRequest(url);
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
