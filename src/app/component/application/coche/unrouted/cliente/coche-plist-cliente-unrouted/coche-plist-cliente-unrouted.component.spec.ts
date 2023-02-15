/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CochePlistClienteUnroutedComponent } from './coche-plist-cliente-unrouted.component';

describe('CochePlistClienteUnroutedComponent', () => {
  let component: CochePlistClienteUnroutedComponent;
  let fixture: ComponentFixture<CochePlistClienteUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CochePlistClienteUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CochePlistClienteUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
