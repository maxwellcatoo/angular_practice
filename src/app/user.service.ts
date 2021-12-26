import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap} from 'rxjs/operators'

import { User } from './class-mock/user' // User只是一个限制类型的类
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
// 这里导出是为了让.spec.ts测试文件引入
export class UserService {
  // 定义变量
  user?: User

  // 构造函数
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }


  // 获取所有用户
  private usersURL = "api/users"
  getUsers(): Observable<User[]>{
    this.log('已经获取到用户列表！');
    return this.http.get<User[]>(this.usersURL).pipe(
      tap(Users => this.log('fetched Usuers')),
      catchError(this.handleError('getUsers',[]))
      );
  }
  private handleError<T> (operation = "operation",result?:T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }
  private log(message: String){
    this.messageService.add(`UserService: ${message}`)
  }

  // 获取被选中的用户
  getUser(id: number): Observable<User | undefined> {
    this.log(`已经获取到用户 id=${id}`)

    const url = `${this.usersURL}/${id}`
    return this.http.get<User>(url).pipe(
      tap(_ => {this.log(`fetched user id=${id}`)}),
      catchError(this.handleError<User>(`getUser id=${id}`))
    )
  }

  // 更新用户信息
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  updateUser(user: User): Observable<any>{
    return this.http.put(this.usersURL, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    )
  }
}