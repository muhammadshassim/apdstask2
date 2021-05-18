import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Form1Component } from './form1/form1.component';
import { TemplatepostingComponent } from './templateposting/templateposting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Form1Component,
    TemplatepostingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
