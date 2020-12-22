import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ModalContentComponent } from './modal-content.component';

describe('ModalContentComponent', () => {
  let component: ModalContentComponent;
  let fixture: ComponentFixture<ModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalContentComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContentComponent);
    component = fixture.componentInstance;
    component.data = {
      user: {
        username: 'mauromattos00',
        htmlUrl: 'https://github.com/mauromattos00',
        avatar: '#',
        url: '#',
      },
    };
    fixture.detectChanges();
  });

  it('Should render component', () => {
    expect(component).toBeTruthy();
  });

  it('Should consume user GitHub information', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(
      element.querySelector('.modal-content__text').textContent.split(' '),
    ).toContain(component.data.user.username);
    expect(element.querySelector('a').href).toBe(component.data.user.htmlUrl);
  });
});
