import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css'],
})
export class SubscribersComponent implements OnInit {
  // Varibles for set the pagination
  data!: any[];
  pageSize: number = 10;
  currentPage: number = 1;
  totalItems!: number;
  totalPages!: number;

  // Varibles for set the search subs
  searchQuery!: string;
  searchResults!: any[];
  inputEmpty!: string;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  // Create the request to get the API

  getData() {

    if(this.searchQuery == undefined){
      this.searchQuery = "";
    }

    this.apiService
      .getData(this.currentPage, this.pageSize, this.searchQuery)
      .subscribe((response) => {
        this.data = response.Data;
        this.totalItems = response.Count;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      });
  }

  //Create the function to make the pagination.

  onTableDataChange(page: any) {
    this.currentPage = page;
    this.getData();
  }

  /*searchCriteria(){
    this.apiService.searchSubs(this.searchQuery).subscribe(
      response =>{
        this.searchResults = response;
        console.log(this.searchResults);
      }
    );
  }*/


  // Function for logout

  logout(): void {
    this.apiService.logout();
  }
}
