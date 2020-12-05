import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxEditorModel } from 'ngx-monaco-editor';

@Component({
  selector: 'app-monaco-json-autocomplete',
  templateUrl: './monaco-json-autocomplete.component.html',
  styleUrls: ['./monaco-json-autocomplete.component.css']
})
export class MonacoJsonAutocompleteComponent implements OnChanges {
  @Input() schema: any;
  editor: any;
  options = {
    theme: 'vs-light'
  }
  model: NgxEditorModel;

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (this.model) {
        let change = changes[propName];
        this.setDiagnosticsOptions(change.currentValue)
      }
    }
  }

  init() {
    this.model = {
      value: '',
      language: 'json',
      uri: monaco.Uri.parse('schema')
    }
    this.setDiagnosticsOptions(this.schema);
  }

  setDiagnosticsOptions(schema) {
    if (typeof schema !== "string") {
      console.log("loading from source")
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        enableSchemaRequest: true,
        validate: true,
        schemas: [
          // @ts-ignore
          {
            fileMatch: [monaco.Uri.parse('schema').toString()],
            schema: schema
          }
        ]
      })
    } else {
      console.log("loading from server")
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        enableSchemaRequest: true,
        validate: true,
        schemas: [
          {
            uri: this.schema,
            fileMatch: [monaco.Uri.parse('schema').toString()],
          }
        ]
      })
    }
  }
}
