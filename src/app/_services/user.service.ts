import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:4444/";

    constructor(private http: Http, private https:HttpClient) { }
    postfitnessdata(data){
      return this.http.post(UserService.BaseUrl+'fitness',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
    register(data){
      return this.https.post(UserService.BaseUrl+'login',data).pipe(map((response: Response) => response.json()));
     
    }
    getfitnessdata() {
      return this.http.get(UserService.BaseUrl+'fitness',httpOptions).pipe(map((response: Response) => response.json()));
    }
}