import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit{

  data!:any[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(data =>{
      this.data = data.Data;
      console.log(this.data)
    })

  }

  logout():void {
    this.apiService.logout();
  }

}
