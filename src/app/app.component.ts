import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-monaco-json-autocomplete';
  schema: any;

  schemaServer = 'http://localhost:8000/schema.json';
  schemaObject = 
  {
    properties: {
      apiVersion: {
        type: "string"
      }
    }
  }

  constructor() {
    this.schema = this.schemaServer;
  }
}
