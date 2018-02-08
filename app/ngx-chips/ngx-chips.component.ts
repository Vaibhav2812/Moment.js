import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-chips',
  templateUrl: './ngx-chips.component.html',
  styleUrls: ['./ngx-chips.component.css']
})
export class NgxChipsComponent implements OnInit {

  public items: any[];
  public  itemsAsObjects;
  public form;
  constructor() { }

  ngOnInit() {

}
}
