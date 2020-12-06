import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
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
  
  modelUri: string = "file:///schema";
  model: NgxEditorModel = {
    value: '',
    language: 'json',
    uri: this.modelUri
  }

  monacoLoaded: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      let change = changes[propName];
      this.setDiagnosticsOptions(change.currentValue)
    }
  }

  init(event) {
    this.editor = event;
    this.setDiagnosticsOptions(this.schema);
  }

  setDiagnosticsOptions(schema) {
    if (this.editor) {
      if (typeof schema !== "string") {
        // load from source
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
          enableSchemaRequest: true,
          validate: true,
          schemas: [
            // @ts-ignore
            {
              fileMatch: [this.modelUri],
              schema: schema
            }
          ]
        })
      } else {
        // load from server e.g. http://localhost:8000/schema.json
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
          enableSchemaRequest: true,
          validate: true,
          schemas: [
            {
              uri: this.schema,
              fileMatch: [this.modelUri],
            }
          ]
        })
      }
    }
  }

  get value(): string {
    return this.editor ? this.editor.getValue() : '';
  }
}
