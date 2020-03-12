import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const   httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    'Authorization': 'none'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  apiUrl="http://localhost:8080";

  constructor(public http: HttpClient) {
  }


  getMagasins(){
    /*
    const promise = new Promise<any>((resolve, reject) => {
      const apiURL = `${this.apiUrl}/magasin`;
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
    return promise;*/
    const promise = new Promise<any>((resolve, reject) => {
      this.http.get('assets/magasin.json').subscribe(data => {
        resolve(data);
      });
    });
    return promise;
  }
}
