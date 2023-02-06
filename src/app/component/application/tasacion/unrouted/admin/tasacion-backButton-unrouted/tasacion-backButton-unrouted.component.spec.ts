/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TasacionBackButtonUnroutedComponent } from './tasacion-backButton-unrouted.component';

describe('TasacionBackButtonUnroutedComponent', () => {
  let component: TasacionBackButtonUnroutedComponent;
  let fixture: ComponentFixture<TasacionBackButtonUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasacionBackButtonUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasacionBackButtonUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
