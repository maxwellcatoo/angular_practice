import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // 定义message变量
  messages: string[] = []

  getMessages() {
    return of(this.messages)
  }
  // 定义add方法
  add(message: string) {
    this.messages.push(message)
  }
  // 定义清空消息的方法
  clear() {
    while(this.messages.length){
      this.messages.pop()
    }
  }
  constructor( ) { }
}
