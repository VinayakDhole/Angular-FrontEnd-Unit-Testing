import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as text `contact page`', async(() => {
    expect(component.text).toEqual('Contact Page');
  }));

  it('should set submitted to true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it('should call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid', async(() => {
    component.contactForm.controls.email.setValue('');
    component.contactForm.controls.name.setValue('');
    component.contactForm.controls.text.setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.contactForm.controls.email.setValue('vin@gmail.com');
    component.contactForm.controls.name.setValue('Vinayak');
    component.contactForm.controls.text.setValue('text');
    expect(component.contactForm.valid).toBeTruthy();

  }));
  it('text should have color red by default', async(() => {
    const submitButton = fixture.debugElement.query(By.css('.text'));
    expect(submitButton.nativeElement.getAttribute('color'));
  }));
});
