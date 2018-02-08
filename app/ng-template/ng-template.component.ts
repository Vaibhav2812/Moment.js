import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {

  @Input()
  public headerTemplate: TemplateRef<any>;

  @ViewChild('defaultTabButtons')
  public defaultTabButtonsTpl: TemplateRef<any>;

  constructor() { }

  public ngOnInit() {
    console.log(this.defaultTabButtonsTpl);
  }

  public login() {
    console.log("login");
  }
  public signUp() {
    console.log("sign Up");
  }
}
