/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsuarioPlistAdminRouterComponent } from './usuario-plist-admin-router.component';

describe('UsuarioPlistAdminRouterComponent', () => {
  let component: UsuarioPlistAdminRouterComponent;
  let fixture: ComponentFixture<UsuarioPlistAdminRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPlistAdminRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPlistAdminRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
