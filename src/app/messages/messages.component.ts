import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  public messages?: String[];
  ngOnInit(): void {
    this.getMessages()
  }
  
  getMessages(){
    // this.messages = this.messageService.messages
    this.messageService.getMessages().subscribe(msg => {this.messages = msg as String[]})
  }

  addMessage(){
    let msg = (new Date()).toLocaleDateString()
    this.messageService.add(msg)
  }

  clearMessage(){
    this.messageService.clear()
  }
}
