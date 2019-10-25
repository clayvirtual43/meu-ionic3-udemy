import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppResumoPage } from './app-resumo.page';

describe('AppResumoPage', () => {
  let component: AppResumoPage;
  let fixture: ComponentFixture<AppResumoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppResumoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppResumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
