/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsuarioHomeClienteRoutedComponent } from './usuario-home-cliente-routed.component';

describe('UsuarioHomeClienteRoutedComponent', () => {
  let component: UsuarioHomeClienteRoutedComponent;
  let fixture: ComponentFixture<UsuarioHomeClienteRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioHomeClienteRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioHomeClienteRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
