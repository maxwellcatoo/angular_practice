import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {UserService} from '../user.service'
import {User} from '../class-mock/user'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }
  public user?: User;

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.location
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.userService.getUser(parseInt(id)).subscribe(user => {this.user = user})
    }else{
      this.user = undefined
    }
  }

  goBack(){
    this.location.back()
  }
  save(): void{
    if(this.user){
      this.userService.updateUser(this.user).subscribe(() => this.goBack())
    }else{
      
    }
  }
}
