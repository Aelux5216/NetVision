import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  playBook($scope){

    console.log($scope);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': 'Origin'
      })
    };
    var body = {

    };

    return this.http.post("https://192.168.213.129/api/v2/job_templates/7/launch/",body,httpOptions);
  }
}