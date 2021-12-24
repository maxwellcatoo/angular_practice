import { Component, OnInit, Input } from '@angular/core';

import { User } from '../class-mock/user'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})


export class UserDetailComponent implements OnInit {
  user: User = { id: 0, name: '' }

  constructor(
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.user = {id:12,name: '哈哈哈'}
    }, 3000);
  }

}
