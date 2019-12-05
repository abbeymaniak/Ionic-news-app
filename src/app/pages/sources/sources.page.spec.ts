import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesPage } from './sources.page';

describe('SourcesPage', () => {
  let component: SourcesPage;
  let fixture: ComponentFixture<SourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
