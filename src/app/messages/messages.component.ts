import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  // 自己的html中要用，所以用public定义单例
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    console.log(this.messageService)
  }

}
