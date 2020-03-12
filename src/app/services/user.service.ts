import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    'Authorization': 'none'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiUrl = "http://localhost:8080";

  constructor(public http: HttpClient) {
  }

  getUsers() {
    /*
    const promise = new Promise<any>((resolve, reject) => {
      const apiURL = `${this.apiUrl}/acheteur`;
      this.http.get(apiURL,httpOptions).toPromise()
        .then(
          (res) => {
            resolve(res);
          }
        ).catch(
          (err) => {
            reject(err);
          }
        );
    });
        */
    const promise = new Promise<any>((resolve, reject) => {
      this.http.get('assets/user.json').subscribe(data => {
        resolve(data);
      });
    });
   return promise;
  }
}
