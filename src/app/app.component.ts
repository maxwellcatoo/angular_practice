import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articleTitle = 'user-management（用户管理）';
  fileType = "word"
  public arr = `fkldjfkdf<br>`
  constructor(){
    this.arr += `fjkdjfkjfksf`
  }
}
