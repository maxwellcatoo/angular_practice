import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { User } from './class-mock/user' // User只是一个限制类型的类
import { USERS } from './class-mock/mock-users' // USERS是一个User[]类的数据
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
// 这里导出是为了让.spec.ts测试文件引入
export class UserService {
  // 定义变量
  user?: User

  // 构造函数
  constructor(private messageService: MessageService) { }

  // 钩子函数
  ngOnInit(): void {
    this.getUsers()
  }

  // 获取所有用户
  getUsers(): User[] {
    // 从路由中拿到数据id
    // const id = this.messageService.route.snapshot.paramMap.get('id')
    // this.getUser(Number(id)).subscribe(user => this.user = user)
    return USERS
  }

  // 获取被选中的用户
  getUser(id: number): Observable<User | undefined> {
    this.messageService.add(`UserService: 已经获取到用户 id=${id}`)
    return of(USERS.find(user => user.id === id)) // 从USERS数组中找到id为传入值的user
  }
}