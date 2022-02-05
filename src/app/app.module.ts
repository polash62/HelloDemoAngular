import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';

import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
