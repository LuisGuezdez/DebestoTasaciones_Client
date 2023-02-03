/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompraBacButtonAdminUnroutedComponent } from './compra-bacButton-admin-unrouted.component';

describe('CompraBacButtonAdminUnroutedComponent', () => {
  let component: CompraBacButtonAdminUnroutedComponent;
  let fixture: ComponentFixture<CompraBacButtonAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraBacButtonAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraBacButtonAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
