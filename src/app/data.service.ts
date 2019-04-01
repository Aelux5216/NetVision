import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { selectedData } from './selectedData';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  runPlaybook(data: selectedData): Observable<object> {
    return this.http.post<selectedData>('http://10.1.0.224:3000/api/', data);
  }
  
  getVersions(data: selectedData): Observable<object> {
    return this.http.get('http://10.1.0.224:3000/api/' + data.device);
  }

  getCachedDevices(): Observable<any> {
    return this.http.get('http://10.1.0.224:3000/api/' + 'CachedDevices');
  }

  getNewDevices(): Observable<any> {
    return this.http.get('http://10.1.0.224:3000/api/' + 'NewDevices');
  }
}
