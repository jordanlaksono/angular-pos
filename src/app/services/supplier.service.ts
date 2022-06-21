import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  endpoint:string = 'http://localhost:5000';
  //endpoint:string = 'https://safe-savannah-59594.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  createSupplier(data): Observable<any> {
    let url = `${this.endpoint}/supplier/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  getSupplierse() {
    return this.http.get(`${this.endpoint}/supplier/read`);
  }

  getTope() {
    return this.http.get(`${this.endpoint}/top/read`);
  }

  getKodeSupplier() {
    let url = `${this.endpoint}/supplier/read_max`;
    return this.http.get(url);
  }

  // Get employee
  getSupplier(id): Observable<any> {
    let url = `${this.endpoint}/supplier/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update employee
  updateSupplier(id, data): Observable<any> {
    let url = `${this.endpoint}/supplier/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deleteSupplier(id): Observable<any> {
    let url = `${this.endpoint}/supplier/delete/${id}`;
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
