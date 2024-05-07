import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService <Type>{

  constructor(@Inject(String) protected URL: string, protected http: HttpClient, public router: Router) { }

  post(object: any): Observable<Type> {
    return this.http.post<Type>(this.URL, object)
  }

  get(): Observable<Type> {
    return this.http.get<Type>(this.URL)
  }

  getById(id: any): Observable<Type> {
    return this.http.get<Type>(this.URL + `/${id}`)
  }

  put(id: any, object: any): Observable<Type> {
    return this.http.put<Type>(this.URL + `/${id}`, object)
  }

  delete(id: any): Observable<Type> {
    return this.http.delete<Type>(this.URL + `/${id}`)
  }

  auth() {
    if (localStorage.getItem("auth") == "admin") {

    } else {
      this.router.navigateByUrl("/login")
    }
  }



}
