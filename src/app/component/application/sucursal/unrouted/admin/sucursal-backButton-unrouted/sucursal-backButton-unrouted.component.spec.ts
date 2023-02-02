/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SucursalBackButtonUnroutedComponent } from './sucursal-backButton-unrouted.component';

describe('SucursalBackButtonUnroutedComponent', () => {
  let component: SucursalBackButtonUnroutedComponent;
  let fixture: ComponentFixture<SucursalBackButtonUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalBackButtonUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalBackButtonUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
