import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoJsonAutocompleteComponent } from './monaco-json-autocomplete.component';

describe('MonacoJsonAutocompleteComponent', () => {
  let component: MonacoJsonAutocompleteComponent;
  let fixture: ComponentFixture<MonacoJsonAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonacoJsonAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonacoJsonAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
