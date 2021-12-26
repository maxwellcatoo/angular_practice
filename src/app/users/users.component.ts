import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import {User} from '../class-mock/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) { }
  public users?: User[];

  public selectedItem?: User;

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getUsers().subscribe(users => { this.users = users;})
  }

  onSelectItem(item:User){
    this.selectedItem = item
  }
}
