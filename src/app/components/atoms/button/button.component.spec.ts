import { ComponentFixture, TestBed } from '@angular/core/testing';
import { isRegExp } from 'util';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.nativeElement.querySelector('button');
  });

  it('Should render button', () => {
    expect(component).toBeTruthy();
  });

  it('Should render primary button', () => {
    component.type = 'primary';
    fixture.detectChanges();
    expect(buttonElement.classList).toContain('btn--primary');
  });

  it('Should render ghost button', () => {
    component.type = 'ghost';
    fixture.detectChanges();
    expect(buttonElement.classList).toContain('btn--ghost');
  });
});
