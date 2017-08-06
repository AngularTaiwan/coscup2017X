import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title:string = 'Todos';
  subtitle = 'This is subtitle.';
  arr = [1,2,3,4];
  pi = 3.14159;
  money = 32.123;
  date = new Date();
  mailstrig = 'mail';
  mapper = {'mail': '電子郵件'};
  mapper2 = {'=1': '電子郵件', '=2': '姓名', 'other': '其他'};

  constructor() { }

  ngOnInit() {
  }

}
