/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TasacionDetailAdminUnroutedComponent } from './tasacion-detail-admin-unrouted.component';

describe('TasacionDetailAdminUnroutedComponent', () => {
  let component: TasacionDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<TasacionDetailAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasacionDetailAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasacionDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
