import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }

  getNews()
  {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=373377c8febf46d0980531162b1ce80c');
  }
}
