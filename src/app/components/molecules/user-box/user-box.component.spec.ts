import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { UserBoxComponent } from './user-box.component';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

describe('UserBoxComponent', () => {
  let component: UserBoxComponent;
  let fixture: ComponentFixture<UserBoxComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBoxComponent, ModalContentComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBoxComponent);
    component = fixture.componentInstance;
    component.user = {
      username: 'mauromattos00',
      htmlUrl: 'https://github.com/mauromattos00',
      avatar: '#',
      url: '#',
    };
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle card content visibility', () => {
    expect(
      debugElement.query(By.css('.user-box__card-toggler')).nativeElement
        .innerText,
    ).toContain('Exibir');

    component.isExpanded = true;
    fixture.detectChanges();

    expect(
      debugElement.query(By.css('.user-box__card-toggler')).nativeElement
        .innerText,
    ).toContain('Ocultar');
  });
});
