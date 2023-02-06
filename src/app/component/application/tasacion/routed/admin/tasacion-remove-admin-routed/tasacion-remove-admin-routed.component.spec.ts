/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TasacionRemoveAdminRoutedComponent } from './tasacion-remove-admin-routed.component';

describe('TasacionRemoveAdminRoutedComponent', () => {
  let component: TasacionRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<TasacionRemoveAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasacionRemoveAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasacionRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
