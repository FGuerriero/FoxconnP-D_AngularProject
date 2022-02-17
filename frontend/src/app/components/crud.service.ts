import { map, catchError } from 'rxjs/operators';
import { Header } from './templates/header/header.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  productURL = "http://localhost:3001/products";
  partnerURL = "http://localhost:3001/partners";

  pageChange = new EventEmitter<Header>();

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg : string, err: boolean = false):void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: err? ['msg-fail']: ['msg-success']
    })
  }

  create( item: any, url: string ) : Observable<any> {
    return this.http.post(url,item).pipe(
      map(obj => obj),
      catchError( (e: any) => this.errorHandler(e))
    );
  }

  read(url: string): Observable<any>{
    return this.http.get(url).pipe(
      map(obj => obj),
      catchError( (e: any) => this.errorHandler(e))
    );
  }

  readById(id: string | null, givenURL: string): Observable<any>{
    const url = `${givenURL}/${id}`;
    return this.http.get(url).pipe(
      map(obj => obj),
      catchError( (e: any) => this.errorHandler(e))
    );
  }

  update(object: any, givenURL: string): Observable<any> {
    const url = `${givenURL}/${object.id}`;
    return this.http.put(url,object).pipe(
      map(obj => obj),
      catchError( (e: any) => this.errorHandler(e))
    );
  }

  delete(id: number | undefined, givenURL: string): Observable<any> {
    return this.http.delete(`${givenURL}/${id}`).pipe(
      map(obj => obj),
      catchError( (e: any) => this.errorHandler(e))
    );
  }


  errorHandler(e: any): Observable<any>{
    this.showMessage("An error occurred during the transaction. \nContact an administrator! ", true);
    return EMPTY;
  }
  
}
