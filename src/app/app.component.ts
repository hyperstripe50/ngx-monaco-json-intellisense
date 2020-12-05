import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-monaco-json-autocomplete';
  schema: any;

  constructor() {
    this.schema = 'http://localhost:8000/schema.json';
  }
}
