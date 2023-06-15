import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css'],
})
export class SubscribersComponent implements OnInit {
  data!: any[];
  pageSize: number = 10;
  currentPage: number = 1;
  totalItems!: number;
  totalPages!: number;

  constructor(private apiService: ApiService) {  }

  ngOnInit(): void {
      this.getData()
  }

  getData() {
    this.apiService
      .getData(this.currentPage, this.pageSize)
      .subscribe((response) => {
        this.data = response.Data;
        this.totalItems = response.Count;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      });
  }

  onTableDataChange(page: any) {
    this.currentPage = page;
    this.getData();
  }
  onTableSizeChange(page: any): void {
    this.pageSize = page.target.value;
    this.currentPage = 1;
    this.getData();
  }

  logout(): void {
    this.apiService.logout();
  }
}
