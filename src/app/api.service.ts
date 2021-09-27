import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from './models/file';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getDirectory(path_file: any) {
    return this.http.post<any>(`http://localhost:3000/url`, path_file);
  }
}
