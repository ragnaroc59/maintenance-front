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
export class ProduitService {

  apiUrl="http://localhost:8080";

  constructor(public http: HttpClient) {
  }

  getProduitParId(produitId){
    const promise = new Promise<any>((resolve, reject) => {
      const apiURL = `${this.apiUrl}/produit/`+produitId;
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
    return promise;
  }

  getProduits(){
    /*
    const promise = new Promise<any>((resolve, reject) => {
      const apiURL = `${this.apiUrl}/produit/`;
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
      this.http.get('assets/produit.json').subscribe(data => {
        resolve(data);
      });
    });
    return promise;
  }
}
