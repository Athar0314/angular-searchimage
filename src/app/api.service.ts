import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnInit {
  apiurl = 'https://api.unsplash.com/photos';
  searchurl = 'https://api.unsplash.com/search/photos';
  car = 'car';
  client_id = 'HrnrMgqalkMkLQnvBzeY52DyZZ8CrMsGS40g8SthBNs';
  constructor(private http: HttpClient) {}
  getPhotos() {
    return this.http.get(this.apiurl + '?client_id=' + this.client_id);
  }
  getSearchPhotos(search: any) {
    return this.http.get(
      this.searchurl + '?query=' + search + '&client_id=' + this.client_id
    );
  }
  ngOnInit(): void {}
}
