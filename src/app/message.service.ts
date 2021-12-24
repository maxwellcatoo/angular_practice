import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // 定义message变量
  messages: string[] = []
  // 定义add方法
  add(message: string) {
    this.messages.push(message)
  }
  // 定义清空消息的方法
  clear() {
    this.messages = []
  }
  constructor( ) { }
}
