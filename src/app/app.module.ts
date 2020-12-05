import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { HttpClientModule } from '@angular/common/http';
import { MonacoJsonAutocompleteComponent } from './monaco-json-autocomplete/monaco-json-autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    MonacoJsonAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
