import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChipsComponent } from './ngx-chips/ngx-chips.component';
import { DynamicNgContentComponent } from './dynamic-ng-content/dynamic-ng-content.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgrxStoreComponent } from './ngrx-store/ngrx-store.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SaasPracticeComponent } from './saas-practice/saas-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapFormComponent,
    NgxChipsComponent,
    DynamicNgContentComponent,
    NgTemplateComponent,
    NgrxStoreComponent,
    FileUploadComponent,
    SaasPracticeComponent
  ],
  imports: [
    BrowserModule,
    TagInputModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
