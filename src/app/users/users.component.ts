import { Component, OnInit } from '@angular/core'
import { User } from '../class-mock/user'
import { USERS } from '../class-mock/mock-users'
import { UserService } from '../user.service'
@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users?: User[];
  constructor(private userService: UserService) { }

  // 生命周期钩子函数
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    // this.userService.getUsers()
    this.users = USERS
  }

}
