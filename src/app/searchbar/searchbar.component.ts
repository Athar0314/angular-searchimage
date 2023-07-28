import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  search: String = '';
  photo: any;
  searchPhoto: any;

  constructor(private api: ApiService, private Toast: ToastrService) {
    // console.log(this.apiurl + '?' + this.client_id);
    this.getPhotos();
  }
  searchs() {
    this.getSearchPhoto();
  }
  getPhotos() {
    this.api.getPhotos().subscribe((data) => {
      this.photo = data;
    });
  }
  getSearchPhoto() {
    this.api.getSearchPhotos(this.search).subscribe((res) => {
      this.searchPhoto = res;
      if (this.searchPhoto.results.length > 0) {
        this.searchPhoto = res;
      } else {
        this.Toast.warning(
          'Please write something in search Box',
          'Field Required'
        );
      }
    });
  }

  ngOnInit(): void {}
}
